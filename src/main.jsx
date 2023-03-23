import { ThemeProvider } from '@mui/system'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import myTheme from './themes/myTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
