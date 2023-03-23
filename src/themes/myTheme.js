import { createTheme } from '@mui/material/styles';
const myTheme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ownerState}) => ({
                    ...(ownerState.variant === 'contained' && {
                        boxShadow: 'none',
                    }),
                    textTransform: 'none',
                }),
            }
        }
    }
  });

  myTheme.shadows[1] = "0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)"
  myTheme.shadows[2] = "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)"

export default myTheme