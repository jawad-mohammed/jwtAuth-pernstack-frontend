import {useState} from 'react'
import { useNavigate } from 'react-router-dom' 
const ForgotPassword = () => {
  const [mobileNum,setMobileNum] = useState('')
//navigate
const navigate = useNavigate()

  const handleSubmit =async(e)=>{
e.preventDefault()
const body = mobileNum;
console.log(body);
const verifyUser = await fetch(`http://localhost:8000/protectedroutes/forgotpassword`,{
  method: "POST",
   headers: {'Content-type':'application/json'},
   body:JSON.stringify(body)
})
const parseRes = await verifyUser.json()

if(parseRes.verifyUser){
  // alert(parseRes.verifyUser.message)
  navigate('/home')

}


  }
  return (
    <>
    <h2>Forgot password</h2>
    <form onSubmit={handleSubmit}>
<input type="text" name='mobileNum' value={mobileNum} 
onChange={(e)=>setMobileNum(e.target.value)}  required/>
<button type='submit'>submit</button>


    </form>





    
    </>
  )
}

export default ForgotPassword