import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Adhildetails from './adhildetails'
import { update } from './redux/Userslice'
import { colorcghange } from './redux/themeslice'

function App() {

  const [THEME, setTHEME] = useState("light")

  let  dispatch=useDispatch()
  const [count, setCount] = useState(0)
  let username=useSelector((state)=>{
   
    return  state.user.name
  })

  function themechange(e) {
    e.preventDefault() 
    setTHEME(prev=>{
      console.log(prev,"preevvvvvv")
      if (prev=="light") {
        return "dark"
      }
      return "light"

    dispatch(colorcghange({THEME}))
      // 
    })
  }



  useEffect(() => {
 
    dispatch(colorcghange({THEME}))
  }, [THEME])
  

  let usemail=useSelector(state=>state.user.email)
  let theme=useSelector(state=>{
console.log(    state,"stattetee")
    
    
   return state.theme.themeclr


  })
console.log(theme,"themeee")
  return (
    <>
      <div>

        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button style={{border:"1px solid black"} }   onClick={themechange}> {THEME} and the state theme is {theme} </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {username} is {count}
        </button>
        <p>
          email {usemail} and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Adhildetails />
    </>
  )
}

export default App
