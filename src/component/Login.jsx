import {useState} from 'react'
import Layout from './Layout'
import {useNavigate } from 'react-router-dom'
const Login = () => {

  const [userDetails,setUserDetails] =useState({
 
    Email:"",
    Password:"",
 
  })
  const {Email,Password} = userDetails
const handleChange=(e)=>{
setUserDetails({...userDetails,[e.target.name]:e.target.value})
}

const navigate = useNavigate()

const handleSubmit=async(e)=>{
e.preventDefault()
const body = userDetails
console.log(body);
const response = await fetch(`http://localhost:8000/routes/api/v1/login`,{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(body)
})
const parseRes = await response.json()
if(parseRes.jwtToken){
  localStorage.setItem("token", parseRes.jwtToken);
  alert(parseRes.message)
  navigate('/home')
}else{
  navigate('/login')
  alert(` ${parseRes.message}`)
}

}



    return (
      
    <div style={{display:'grid',justifyContent:'center'}}>
  <Layout/>

     <h4>Login </h4> 
<form onSubmit={handleSubmit}>
Email <br /><input type="text" name='Email' value={Email} onChange={handleChange}  required/><br />
Password <br /><input type="text" name='Password' value={Password} onChange={handleChange} required /><br />
<button type='submit'>Register</button>
</form>




    </div>
  )
}

export default Login
