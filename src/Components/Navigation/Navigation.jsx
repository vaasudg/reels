import React, { useState } from 'react'
import { Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Popover } from '@mui/material'

import FolderIcon from '@mui/icons-material/Folder'
import FontDownloadRoundedIcon from '@mui/icons-material/FontDownloadRounded'
import CropOriginalIcon from '@mui/icons-material/CropOriginal'
import { Box } from '@mui/system'
import { NavigationStyle } from './Navigation.style'
import Media from './Media/Media'
import Text from './Text/Text'
import ObjectComponent from './Object/Object'

const Navigation = () => {
  const [activeItem, setActiveItem] = useState(null)
  const [isVisibleContent, setIsVisibleContent] = useState(false)

  const onClickItem = event => {
    setIsVisibleContent(true)
  }

  const onClickItemActive = itemName => {
    setActiveItem(itemName)
  }

  const Content = ({ item }) => {
    switch (item) {
      case 'media':
        return <Media />
      case 'text':
        return <Text />
      case 'object':
        return <ObjectComponent />
      default:
        return null
    }
  }

  return (
    <NavigationStyle className='navigation'>
      <Box className='navigation-primary' variant='permanent' anchor='left'>
        <List>
          <ListItem onClick={() => onClickItemActive('media')} className={activeItem === 'media' ? 'active' : ''}>
            <ListItemButton onClick={onClickItem}>
              <ListItemIcon>
                <FolderIcon />
                <ListItemText primary='Scene' />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => onClickItemActive('object')} className={activeItem === 'object' ? 'active' : ''}>
            <ListItemButton button onClick={onClickItem}>
              <ListItemIcon>
                <CropOriginalIcon />
                <ListItemText primary='Object' />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => onClickItemActive('text')} className={activeItem === 'text' ? 'active' : ''}>
            <ListItemButton button onClick={onClickItem}>
              <ListItemIcon>
                <FontDownloadRoundedIcon />
                <ListItemText primary='Text' />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      {isVisibleContent && (
        <Grid>
          <Box className='navigation-content-wrapper' variant='persistent' anchor='left'>
            <div className='navigation-content'>{<Content item={activeItem} />}</div>
          </Box>
        </Grid>
      )}
    </NavigationStyle>
  )
}

export default Navigation
