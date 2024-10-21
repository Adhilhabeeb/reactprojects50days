import React from 'react'
import { useSelector } from 'react-redux'

function Adhildetails() {
    let name=useSelector(state=>state.user.name)
    let theme=useSelector(state=>state.theme.themeclr)
  return (
    <div  style={{background:theme=="light"?"white":"grey",color:theme=="light"?"black":"white"}} >

        my name is {name}  and the the,me is  {theme}
    </div>
  )
}

export default Adhildetails