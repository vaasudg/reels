import { styled } from '@mui/system'
export const NavigationStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  ' .MuiBox-root.navigation-primary': {
    width: 85,
    height: '100vh',
    border: 0,
    backgroundColor: theme.palette.colors.jet,
    ' .MuiList-root': {
      padding: 0
    },
    ' .MuiListItem-root': {
      height: 90,
      padding: 0,
      margin: 0,
      transition: 'all .5s',
      ' .MuiButtonBase-root': {
        height: '100%',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        ' .MuiListItemIcon-root': {
          color: theme.palette.colors.cadetGrey,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          ' .MuiSvgIcon-root': {
            transform: 'scale(1.5)'
          },
          ' .MuiListItemText-root': {
            color: theme.palette.colors.cadetGrey,
            marginTop: 10,
            ' .MuiTypography-root': {
              fontSize: 12
            }
          }
        }
      },
      '&.active': {
        backgroundColor: theme.palette.colors.arsenic,
        ' .MuiListItemIcon-root': {
          color: '#FFF !important'
        },
        ' .MuiListItemText-root': {
          color: '#FFF !important'
        }
      }
    }
  },
  ' .MuiBox-root.navigation-content-wrapper': {
    backgroundColor: theme.palette.colors.arsenic,
    // transform: 'translate(85px, 0px)',
    borderRadius: '0',
    width: 400,
    height: '100vh',
    ' .navigation-content': {
      padding: 10,
      color: '#FFF'
    }
  }
}))
