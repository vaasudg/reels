import React from 'react'

import { Box } from '@mui/system'
import { TextStyle } from './Text.style'

const Text = () => {
  return (
    <TextStyle className='media'>
      <Box className='media-content' variant='persistent' anchor='left'>
        Coming Soon.
      </Box>
    </TextStyle>
  )
}

export default Text
