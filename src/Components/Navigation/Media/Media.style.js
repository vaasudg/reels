import { styled } from '@mui/system'
export const MediaStyle = styled('div')(({ theme }) => ({
  ' .MuiTabs-root': {
    ' .MuiButtonBase-root': {
      background: 'rgba(0,0,0,0)',
      color: theme.palette.colors.cadetGrey,
      fontWeight: 800,
      fontSize: 15,
      textTransform: 'none',
      borderRadius: '100px'
    },
    ' .MuiTabs-indicator': {
      background: theme.palette.colors.greenTurquoise,
      boxShadow: '0 5px 10px'
    }
  },
  ' .MuiFormControl-root': {
    ' .MuiFormLabel-root': {
      color: theme.palette.colors.auroMetalSaurus,
      //   fontFamily: 'Abel',
      fontSize: 13
    },
    ' .MuiInputBase-root': {
      ' .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.colors.auroMetalSaurus}`
      },
      ' .MuiSvgIcon-root': {
        color: theme.palette.colors.greenTurquoise
      }
    },
    ' .MuiInputBase-input': {
      fontSize: 13,
      color: theme.palette.colors.auroMetalSaurus
    }
  },
  ' .tabPanel': {
    height: '90vh',
    overflowY: 'auto'
  }
}))
