import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import { GalleryStyle } from './Gallery.style'
import { useDrag } from 'react-dnd'

const DraggableImage = ({ imageSrc, type, index }) => {
  const [, drag] = useDrag({
    type,
    item: { imageSrc }
  })

  return <CardMedia ref={drag} component='img' alt={`Image ${index + 1}`} image={imageSrc} />
}

const Gallery = ({ images }) => {
  return (
    <GalleryStyle className='gallery-wrapper'>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} className='gallery-item'>
            <Card>
              <DraggableImage imageSrc={image.url} type='BG_IMAGE' index={index} />

              {/* <CardMedia ref={drag} component='img' alt={`Image ${index + 1}`} image={image.url} /> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </GalleryStyle>
  )
}

export default Gallery
