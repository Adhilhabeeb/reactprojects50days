import { AppBar, Box ,styled,Toolbar} from '@mui/material'
import React from 'react'

import Stack from '@mui/material/Stack';
import Navleft from '../navleft/Navleft';
import Navcenter from '../navcenter/Navcenter';
import Navend from '../navend/Navend';

function Navbar() {

    let Tooolbar=styled(Toolbar)(({theme})=>({
        background:"white",color:"red"
        
        
          }))
  return (



    <>
    

    <AppBar>
<Tooolbar>

<Stack width={"100%"} bgcolor={"yellow"} p={2} direction={'row'} justifyContent={'space-between'}  >

<Stack>
ooo
</Stack>
<Stack>

    gggg
</Stack>
<Stack>
bbb
    
</Stack>
</Stack>
</Tooolbar>
    </AppBar>
    <Stack direction={"row"}  bgcolor={"blue"} spacing={{sm:2, md:4}} color={"white"}  p={3}   sx={{display:{xs:"block",sm:"flex",lg:"flex"}}} >


<Navleft/>
<Navcenter/>
<Navend/>



  </Stack>
    </>


  
  )
}

export default Navbar