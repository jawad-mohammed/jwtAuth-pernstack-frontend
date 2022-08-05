import React from 'react'
import Logout from '../component/Logout'
import {useNavigate} from 'react-router-dom'
const Home = () => {

const navigate = useNavigate()

const logOutBtn=()=>{
navigate('/logout')
}

  return (
    <>
 <h3>Home page</h3>
 
 
 <div style={{display:'flex',justifyContent:'flex-end',height:'35px',width:'25px' }}>
<button onClick={logOutBtn}>Logout</button>
 </div>
 
      
    </>
  )
}

export default Home
