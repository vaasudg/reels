import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import { GalleryAnimalStyle } from './GalleryAnimal.style'
import { useDrag } from 'react-dnd'

const DraggableImage = ({ imageSrc, type, index }) => {
  const [, drag] = useDrag({
    type,
    item: { imageSrc }
  })

  return <CardMedia ref={drag} component='img' alt={`Image ${index + 1}`} image={imageSrc} />
}

const GalleryAnimal = ({ images }) => {
  return (
    <GalleryAnimalStyle className='gallery-wrapper'>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} className='gallery-item'>
            <Card>
              <DraggableImage imageSrc={image.url} type='SVG_IMAGE' index={index} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </GalleryAnimalStyle>
  )
}

export default GalleryAnimal
