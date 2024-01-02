import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded'
import FastRewindRoundedIcon from '@mui/icons-material/FastRewindRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import { Button, Grid, MenuItem, Popover, Menu, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { StageStyle } from './Stage.style'

const Stage = () => {
  const [droppedBGImage, setDroppedBGImage] = useState('')
  const [droppedItems, setDroppedItems] = useState([])
  const [loader, setLoader] = useState(false)

  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ left: 0, top: 0 })
  const [initialOffset, setInitialOffset] = useState({ x: 0, y: 0 })
  const [currentItem, setCurrentItem] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null)
  const [extractedColors, setExtractedColors] = useState([])
  const [svg, setSvg] = useState('')

  const handleMouseClick = itemId => {
    setCurrentItem(itemId)
  }
  const handleMouseDown = (itemId, e) => {
    // if (currentItem === itemId) console.log({ _: e.target.parentNode.parentNode.id, __: `svg-${currentItem}` })
    // if (e.target.parentNode.parentNode.id === `svg-${currentItem}`)
    setIsDragging(true)
    setInitialOffset({
      x: e.clientX - position.left,
      y: e.clientY - position.top
    })
  }
  const handleMouseMove = e => {
    if (isDragging) {
      setPosition({
        left: e.clientX - initialOffset.x,
        top: e.clientY - initialOffset.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // setCurrentItem(null)
  }
  const [temp, setTemp] = useState('')
  const handleContextMenu = e => {
    e.preventDefault()
    setIsDragging(false)
    setAnchorEl(e.currentTarget)
    setTemp(e.currentTarget.id)
    const childrenArray = Array.from(e.currentTarget.children)
    const outerHTMLArray = childrenArray.map(child => child.outerHTML)
    setSvg(outerHTMLArray.join(''))
    colorExtractor(outerHTMLArray.join(''))
  }
  const handleClose = () => {
    // setIsDragging(true)
    setAnchorEl(null)
    setSubMenuAnchorEl(null)
  }
  const handleColorChange = () => {
    setSubMenuAnchorEl(anchorEl)
    // handleClose()
  }
  const handleColorSelect = color => {
    console.log(`Selected color: ${color}`)
    handleClose()
  }
  const colorExtractor = svg => {
    const re = /#[0-9a-f]{3,6}/gi
    const str = svg
    const colors = str.match(re)
    const uniqueColors = colors ? Array.from(new Set(colors)) : []
    setExtractedColors(uniqueColors)
  }
  const replaceColorInSVG = (svg, oldColor, newColor) => {
    const updatedSVG = svg.replace(new RegExp(oldColor, 'g'), newColor)
    console.log({ updatedSVG })
    // return updatedSVG
  }
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'BG_IMAGE',
    drop: item => {
      setLoader(true)
      setTimeout(() => {
        setDroppedBGImage(item)
        setLoader(false)
      }, 800)
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })
  const [{ canDrop: canDropItems }, dropItems] = useDrop({
    accept: 'SVG_IMAGE',
    drop: (item, monitor) => {
      const { x, y } = monitor.getClientOffset()

      console.log(monitor.getClientOffset())
      fetch(item.imageSrc)
        .then(res => res.text())
        .then(image => {
          setDroppedItems(prevItems => [...prevItems, { image, position: { left: x, top: y } }])
          // setPlotSVG(image)
        })
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })
  const borderStyle = {
    boxShadow: `0px 0px 0px 4px ${canDrop ? (isOver ? '#FFF' : '#181a1ec7') : '#181a1ec7'} inset, 0 10px 10px #0c0d10`
  }
  return (
    <StageStyle className='stage-wrapper' onContextMenu={e => e.preventDefault()}>
      <div className='stage-container'>
        <Grid container justifyContent='space-between' alignItems='center' marginBottom='30px'>
          <Grid item>
            <Typography>Project name</Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => alert('Soon...')} className='export-button' endIcon=<KeyboardArrowDownRoundedIcon />>
              Export
            </Button>
          </Grid>
        </Grid>
        <Grid className='stage' container>
          <Grid
            className='stage-screen'
            item
            ref={drop}
            style={{
              ...borderStyle,
              backgroundImage: `url(${droppedBGImage?.imageSrc})`
            }}
          >
            <Grid
              item
              container
              ref={dropItems}
              style={{
                width: 'inherit',
                height: '500px',
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* {loader && <CircularProgress />} */}
              {droppedItems.map((item, index) => (
                <div
                  key={index}
                  className='svg-plot'
                  id={`svg-${index}`}
                  style={{
                    cursor: isDragging ? 'grabbing' : 'grab',
                    position: 'relative',
                    left: position.left,
                    top: position.top
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseDown={e => handleMouseDown(index, e)}
                  onClick={() => handleMouseClick(index)}
                  dangerouslySetInnerHTML={{ __html: item.image }}
                  onContextMenu={handleContextMenu}
                >
                  {/* {console.log({ currentItem, index })} */}
                </div>
              ))}
              {Boolean(anchorEl) && (
                <Grid
                  className='context-menu'
                  // open={Boolean(anchorEl)}
                  // anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                >
                  <MenuItem onClick={handleColorChange}>Change Color</MenuItem>
                  <Grid className='color-palette'>
                    {extractedColors?.map(color => (
                      <input
                        type='color'
                        id={color}
                        value={color}
                        onChange={e => {
                          console.log({ _: e.target.value })
                          // replaceColorInSVG(svg, '4DBA32', '#FF0000')
                        }}
                      />
                    ))}
                  </Grid>
                  <MenuItem>Edit Clip</MenuItem>
                  <MenuItem>Delete Clip</MenuItem>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid className='stage-footer' item container justifyContent='center' marginTop='30px'>
          <Grid item>
            <Button className='rewind-button' disableRipple>
              <FastRewindRoundedIcon />
            </Button>
          </Grid>
          <Grid item>
            <Button className='play-button' disableRipple onClick={() => alert()}>
              <PlayArrowRoundedIcon />
            </Button>
          </Grid>
          <Grid item>
            <Button className='forward-button' disableRipple>
              <FastForwardRoundedIcon />
            </Button>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </div>
    </StageStyle>
  )
}

export default Stage
