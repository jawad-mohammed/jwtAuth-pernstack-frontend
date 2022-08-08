import {useEffect, useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import Layout from './Layout'
import Home from '../pages/Home'
import {useNavigate} from 'react-router-dom'
const Register = () => {



  
<Layout/>
const [allUsers,setAllUsers] = useState([])

  const [userDetails,setUserDetails] =useState({
    Name:"",
    Email:"",
    Password:"",
    ConfirmPassword:"",
    PhoneNum:"",
    // bike:"",
    // car:""
  })
const [otpState,setOtpState] = useState('') 
const [otpValue,setOtpValue] = useState('')


  const {Name,Email,Password,ConfirmPassword,PhoneNum,bike,car} = userDetails
const handleChange=(e)=>{
setUserDetails({...userDetails,[e.target.name]:e.target.value})
}

const navigate = useNavigate()

useEffect(()=>{
// axios.post(`http://localhost:8000/routes/api/v1/otp`)
// .then((res)=>window.confirm(res.data) )
// .catch((err)=>console.warn(err))

},[])





const newOTPhandle=async(e)=>{
  e.preventDefault()

}
const verifyOtp =async(e)=>{
e.preventDefault()
// if(parseOtp){

//}
}


const handleSubmit=async(e)=>{
e.preventDefault()
const body = userDetails
//console.log(body);

 const response = await fetch(`http://localhost:8000/routes/post`,{
   method:'POST',
   headers:{'Content-Type':'application/json'},
   body:JSON.stringify(body)
 })
 const parseRes = await response.json()
 if(parseRes.jwtToken){
   localStorage.setItem("newToken",parseRes.jwtToken)
   alert('registered new user')
 //  alert(parseRes.jwtToken)
  navigate('/home')
 }

  alert(parseRes.message)
}

//@get req




    return (
    <>    
    <div style={{display:'grid',justifyContent:'center'}}>
      
      <Layout/>
      <h4>Register</h4>
<form onSubmit={handleSubmit}>
Name <br /><input type="text" name='Name' value={Name} onChange={handleChange} required /> <br />
Email <br /><input type="text" name='Email' value={Email} onChange={handleChange}  required/><br />
Password <br /><input type="text" name='Password' value={Password} onChange={handleChange} required /><br />
Confirm Passowrd <br /><input type="text" name='ConfirmPassword' value={ConfirmPassword} onChange={handleChange} required /><br />
Phone Number <br /><input type="text" name='PhoneNum' value={PhoneNum} onChange={handleChange} required /><br />
                 
                   <input type="checkbox" name="bike" value={"bike"} onChange={handleChange} />
                  <label htmlFor='bike'> I have a bike</label><br/>
                 
                 <input type="checkbox"  name="car" value={"car"} onChange={handleChange} />
                <label htmlFor='car'> I have a car</label><br/>
             <button type='submit'>Register</button>
</form>
</div>
<div>
{/* <h4>Get a new otp code</h4>
<form onSubmit={newOTPhandle}>
<button type='submit'>Get a new otp</button>
</form> */}


<h4>Verify with OTP</h4>
<form onSubmit={verifyOtp}>
<input type="text" name='otpState' value={otpState} onChange={(e)=>setOtpState(e.target.value)}/>
<button type='submit'>submit</button>
</form>
</div>





</>

    )

    }




export default Register
