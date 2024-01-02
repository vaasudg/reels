import React from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import { GalleryTreeStyle } from './GalleryTree.style'
import { useDrag } from 'react-dnd'

const DraggableImage = ({ imageSrc, type, index }) => {
  const [, drag] = useDrag({
    type,
    item: { imageSrc }
  })

  return <CardMedia ref={drag} component='img' alt={`Image ${index + 1}`} image={imageSrc} />
}

const GalleryTree = ({ images }) => {
  return (
    <GalleryTreeStyle className='gallery-wrapper'>
      <Grid container spacing={2}>
        {images?.map((image, index) => (
          <Grid item key={index} className='gallery-item'>
            <Card>
              <DraggableImage imageSrc={image.url} type='SVG_IMAGE' index={index} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </GalleryTreeStyle>
  )
}

export default GalleryTree
