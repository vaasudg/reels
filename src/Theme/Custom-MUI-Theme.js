import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    colors: {
      eerieBlack: '#1D1920',
      jet: '#352b3c',
      arsenic: '#413946',
      greenTurquoise: '#088060',
      cadetGrey: '#9ca3af',
      auroMetalSaurus: '#6b7280'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Abel',
          textTransform: 'none',
          color: '#ffffff',
          borderRadius: 12
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Abel'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Abel',
          overflow: 'hidden',
          height: 50,
          borderRadius: 10,
          minWidth: '100% !important',
          width: '100%',
          '& .MuiInputBase-input-MuiOutlinedInput-input': {
            padding: 0,
            minWidth: '100%'
          }
        }
      }
    },
    MuiDrawer: {},
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Abel',

          '&.Mui-selected': {
            color: '#fff !important'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Abel'
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Abel'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Abel'
        }
      }
    }
  },

  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 960, // small laptop
      lg: 1280, // desktop
      xl: 1920 // large screens,
    }
  }
})
