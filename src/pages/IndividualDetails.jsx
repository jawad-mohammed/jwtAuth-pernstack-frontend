import {useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'
const IndividualDetails = () => {
  //const [paginateUsers,setPaginateUsers] = useState();
  const [getDetails,setGetDetails] = useState([])
const [updateUser,setUpdateUser] = useState(getDetails)

//pagination logic
  const [pageNumber,setPageNumber] = useState(0)
const usersPerPage = 5;
const pagesVisited = pageNumber * usersPerPage;

const displayUsers = getDetails
.slice(pagesVisited,pagesVisited+usersPerPage)
.map((person)=>{
return(<div>
 {person.customerid} | {person.name} | {person.email} | {person.phonenum} | {person.bike} | {person.car} 
<button onClick={()=>handleUpdate(person)}>Update</button> <hr />
</div>)
})

const pageCount = Math.ceil(getDetails.length/usersPerPage);
const changePage = ({selected})=>{
setPageNumber(selected)
}



  const fetchData = async()=>{
    
    const getList = await fetch(`http://localhost:8000/routes/api/v1/get`);
    const jsonData = await getList.json();
    setGetDetails(jsonData);
  }

  useEffect(()=>{
fetchData()
  },[])

  const handleUpdate=async(person)=>{
  const body = person;
//  console.log(body);
setUpdateUser(body)
console.log(body);
  }

//update request from user 
const submitUser=()=>{

}



    return (
    <>
    <h2>Update Your details here </h2>
<div style={{display:'grid',justifyContent:'center',paddingLeft:'10rem'}}>
<form>
 Name: <br /> <input type="text" defaultValue={updateUser.name} /><br />
 Email: <br /> <input type="text" defaultValue={updateUser.email} /><br />
 Phone Number <br /> <input type="text" defaultValue={updateUser.phonenum} /><br />
 Bike <br /> <input type="text" defaultValue={updateUser.bike} /><br />
 Car <br /> <input type="text" defaultValue={updateUser.car} /><br />
  
  <button onSubmit={submitUser}>Submit</button>
</form>
</div>

{displayUsers}
<ReactPaginate
previousLabel={'previous'}
nextLabel={'next'}
pageCount={pageCount}
onPageChange={changePage}
containerClassName={{width:'80%',height:'40px',display:'flex',justifyContent:'center'}}
/>


  
    </>
  )
}

export default IndividualDetails
