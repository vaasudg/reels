import { Grid } from '@mui/material'
import { styled } from '@mui/system'
export const StageStyle = styled(Grid)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundColor: theme.palette.colors.eerieBlack,
  color: '#FFF',
  ' .stage-container': {
    padding: 20,
    height: '100vh',
    ' .export-button': {
      backgroundColor: theme.palette.colors.greenTurquoise,
      borderRadius: 5
    },
    ' .stage': {
      backgroundColor: theme.palette.colors.auroMetalSaurus,
      transition: 'all .5s'
      // boxShadow: '0px 0px 0px 4px #181a1ec7 inset, 0 10px 10px #0c0d10'
    },
    ' .stage-screen': {
      width: '100%',
      minHeight: 510,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ' .MuiCircularProgress-root': {
        // color: theme.palette.colors.greenTurquoise
        color: '#FFF'
      }
    },
    ' .stage-footer': {
      ' .MuiButtonBase-root': {
        padding: 0,
        margin: 0,
        // minWidth: 30,
        '&.play-button': {
          minWidth: 50,
          ' .MuiSvgIcon-root': {
            transform: 'scale(2)'
          }
        }
      }
    },
    ' .svg-plot': {
      ' svg': {
        width: 250
      }
    }
  },

  ' .context-menu': {
    backgroundColor: '#202020',
    position: 'absolute',
    padding: '40px 10px 10px',
    borderRadius: 5
  }
}))
