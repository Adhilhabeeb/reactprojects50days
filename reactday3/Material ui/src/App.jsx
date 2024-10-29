import React from 'react'
import {Button, Box, styled, Toolbar } from "@mui/material"
import Navbar from './components/Navbar/navbar'
function App(theme) {


  let   Greenbutton =styled(Button)({

    backgroundColor:"green",color:"white","&:hover":{
       backgroundColor:"white",color:"green"
       
    }
  })


  
  return (
   
    <Box sx={{background:"red",}}>
{/* <Button color="primary" variant="contained">
   Primary Button
</Button> */}

{/* <Button
  sx={[
    (theme) => ({
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.dark,
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.secondary.light,
      }),
      '&:hover': {
        color:theme.palette.primary.dark,
        boxShadow: theme.shadows[3],
        backgroundColor: theme.palette.primary.light,
        ...theme.applyStyles('dark', {
          backgroundColor: theme.palette.secondary.dark,
        }),
      },
    }),
  ]}
>
  Submit
</Button>; */}

{/* Copy */}


{/* <Button variant='contained'  color='primary'  >


  hellooo
</Button>

    <Greenbutton>


      grebnnn
    </Greenbutton> */}




<Navbar/>
    </Box>
  )
}

export default App