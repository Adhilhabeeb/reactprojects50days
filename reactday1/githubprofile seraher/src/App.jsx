import React, { useState ,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./App.css"
import Report from './Report';
function App() {


const [username, setusername] = useState("Adhilhabeeb")

const [datagit, setdatagit] = useState({})
const [loading, setloading] = useState(false)
 async function  fetchloadeddata(params) {
setloading(true)

let   resp= await fetch(`https://api.github.com/users/${username}`)
  let data= await resp.json()
  console.log(data,"data a")

  setdatagit(data)
  setloading(false)
}


useEffect(() => {


fetchloadeddata()

}, [])

  return (
    <div>


      <div className='navdiv'>

     <input type="text" value={username} onChange={(e)=>[
      setusername(e.target.value)
     ]}    />  <SearchIcon  sx={{marginLeft:"-30px",padding:"1px",boxSizing:"content-box"} }   onClick={()=>{ alert("oo")
fetchloadeddata()
     }}  />
      </div>




<Report   data={datagit} loading={loading}/>
    </div>
  )
}

export default App

