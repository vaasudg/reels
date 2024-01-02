import React, { useState } from 'react'

import { Box } from '@mui/system'
import { ObjectStyle } from './Object.style'
import { Tab, Tabs, Typography, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import GalleryAnimal from './Gallery/Animal/GalleryAnimal'
import GalleryTree from './Gallery/Tree/GalleryTree'
import tree1 from '../../../assets/images/tree/tree1.svg'
import tree2 from '../../../assets/images/tree/tree2.svg'
import tree3 from '../../../assets/images/tree/tree3.svg'
import tree4 from '../../../assets/images/tree/tree4.svg'
import animal1 from '../../../assets/images/animals/animal1.svg'
import animal2 from '../../../assets/images/animals/animal2.svg'
import animal3 from '../../../assets/images/animals/animal3.svg'
import animal4 from '../../../assets/images/animals/animal4.svg'

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className='tabPanel'
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const ObjectComponent = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const imagesTree = [
    {
      url: tree1
    },
    {
      url: tree2
    },
    {
      url: tree3
    },
    {
      url: tree4
    }
  ]
  const imagesAnimal = [
    {
      url: animal1
    },
    {
      url: animal2
    },
    {
      url: animal3
    },
    {
      url: animal4
    }
  ]

  return (
    <ObjectStyle className='media'>
      <Box className='media-content' variant='persistent' anchor='left'>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label='Animal' />
          <Tab label='Tree' />
          <Tab label='More' />
        </Tabs>
        <TabPanel value={value} index={0}>
          <GalleryAnimal images={imagesAnimal} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GalleryTree images={imagesTree} />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <TextField
            label='Search scene...'
            variant='outlined'
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon onClick={() => alert('Soon..')} style={{ cursor: 'pointer' }} />
                </InputAdornment>
              )
            }}
          />
        </TabPanel>
      </Box>
    </ObjectStyle>
  )
}

export default ObjectComponent
