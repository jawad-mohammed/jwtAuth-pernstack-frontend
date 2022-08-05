import {useState} from 'react'

const ForgotPassword = () => {
  const [mobileNum,setMobileNum] = useState('')

  const handleSubmit =async(e)=>{
e.preventDefault()
// const body = mobileNum
// console.log(body);
const res = await fetch(`http://localhost:8000/protectedroutes/forgotpassword`)
const resjson = await res.json()
alert(resjson.mess)
  }
  return (
    <>
    <h2>Forgot password</h2>
    <form onSubmit={handleSubmit}>
<input type="text" name='mobileNum' value={mobileNum} 
onChange={(e)=>setMobileNum(e.target.value)} />
<button type='submit'>submit</button>


    </form>





    
    </>
  )
}

export default ForgotPassword