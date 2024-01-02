import { Grid } from '@mui/material'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Navigation from './Components/Navigation/Navigation'
import Stage from './Components/Stage/Stage'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Grid container>
          <Grid item>
            <Navigation />
          </Grid>
          <Grid item flex={1}>
            <Stage />
          </Grid>
        </Grid>
      </div>
    </DndProvider>
  )
}

export default App
