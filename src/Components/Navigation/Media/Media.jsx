import React, { useState } from 'react'

import { Box } from '@mui/system'
import { MediaStyle } from './Media.style'
import { Tab, Tabs, Typography, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Gallery from './Gallery/Gallery'

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

const Media = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const images = [
    {
      url: 'https://img.freepik.com/free-photo/jungle-background-forest-nature-scene-futuristic-generative-ai_191095-519.jpg',
      isBg: true
    },
    {
      url: 'https://img.freepik.com/free-vector/silhouette-shadow-forest-scene_1308-108391.jpg',
      isBg: true
    },
    {
      url: 'https://img.freepik.com/free-vector/cartoon-camping-evening_52683-70947.jpg',
      isBg: true
    },
    {
      url: 'https://img.freepik.com/free-vector/flat-design-glamping-illustration_23-2149353898.jpg',
      isBg: true
    },
    {
      url: 'https://img.freepik.com/premium-vector/summer-spring-day-park-vector-illustration_165488-752.jpg',
      isBg: true
    },
    { url: 'https://img.freepik.com/free-vector/park-landscape-scene_24877-53939.jpg', isBg: true },
    {
      url: 'https://img.freepik.com/free-vector/campsite-camping-with-tents-mountain-background-active-lifestyle-outdoor-leisure-holiday-relaxation-hiking-concept-nature-tourism_575670-2201.jpg',
      isBg: true
    },
    {
      url: 'https://img.freepik.com/free-vector/lake-mountain-valley-concept-illustration_114360-14594.jpg?w=1800&t=st=1703723678~exp=1703724278~hmac=7ec17ce59cfc1820d9a6952057a996fbd38982fdfca6fc6986cded24a2144804',
      isBg: true
    }
  ]

  return (
    <MediaStyle className='media'>
      <Box className='media-content' variant='persistent' anchor='left'>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label='Outdoor' />
          <Tab label='Industry' />
          <Tab label='Region' />
          <Tab label='More' />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Gallery images={images} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Industry coming soon
        </TabPanel>
        <TabPanel value={value} index={2}>
          Region coming soon
        </TabPanel>
        <TabPanel value={value} index={3}>
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
    </MediaStyle>
  )
}

export default Media
