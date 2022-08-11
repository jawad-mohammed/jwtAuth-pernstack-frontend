import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logout from '../component/Logout'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import IndividualDetails from './IndividualDetails'
const Home = () => {
const [displayProducts,setDisplayProducts] = useState([])
const navigate = useNavigate()

const logOutBtn=()=>{
navigate('/logout')
}

const getAllProducts =()=>{
axios.get(`http://localhost:8000/products/api/products/get`)
.then((res)=>setDisplayProducts(res.data))
.catch((err)=>console.log(err))
}
useEffect(()=>{
getAllProducts()
},[])

let item =0
const addToCart=(id)=>{
const total=  item++
 console.log(item)
  alert(`item select ${total}`)
}


const handleProducts=async()=>{

navigate('/manageproduct')
}

  return (
<>
<div style={{display:'grid',justifyContent:'center',paddingLeft:'30px'}}>
 <IndividualDetails/>
</div>


<div>

<h3>Welcome to shopping center</h3>
<div style={{display:'flex',justifyContent:'flex-end'}}>
  <div>
<button onClick={logOutBtn} >Logout</button>
<button style={{display:'flex',justifyContent:'space-around'}}
onClick={handleProducts}>manage products</button>
</div>
</div>

<div style={{display:'flex',backgroundColor:'lightcoral',gap:'12rem'}}>

{displayProducts.map((product)=>{
return(<div style={{display:'grid'}}>
  <li>Product ID: {product.id}</li>
 <li> Name of the category {product.name}</li>
  <li> ${product.price}</li>
  <li> Location {product.location}</li>
  <li> Delivery Cost{product.shipping_cost}</li>
  <li> Stock Available in your area : {product.is_available ?'We are happy to deliver':'Sorry Unavailable'} </li>
  <hr />
  <button onClick={()=>addToCart(product.id)} style={{display:'grid',justifyContent:'center'}}>Add to cart</button>
  
</div>)
})}

</div>
 </div>
<div style={{display:'grid',justifyContent:'center'}}>
 <li >
 </li>
 </div>







    </>
  )
}

export default Home
