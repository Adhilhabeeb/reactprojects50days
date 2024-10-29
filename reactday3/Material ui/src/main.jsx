import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'


let theme=createTheme({

  palette:{
    primary:{
      main:"#b0e600",
      light:"blue",dark:"yellow"
    },
  othercolor:{
    main:"#15c630"
  }
  
  }
})
createRoot(document.getElementById('root')).render(
<ThemeProvider theme={theme}>

      <App />
</ThemeProvider>

 
)
