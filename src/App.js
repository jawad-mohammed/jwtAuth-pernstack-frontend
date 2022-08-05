
import './App.css';
import Register from './component/Register';
import Login from './component/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Layout from './component/Layout';
import Home from './pages/Home';
import Admin from './Roles/Admin';
import CEO from './Roles/CEO';
import Employee from './Roles/Employee';
import HR from './Roles/HR';
import Logout from './component/Logout';
import ForgotPassword from './component/ForgotPassword';
function App() {
  return (
<>



<div style={{display:'flex',justifyContent:'space-around',paddingTop:'5rem'}}>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/ceo' element={<CEO/>}/>
  <Route path='/employee' element={<Employee/>}/>
  <Route path='/hr' element={<HR/>}/>
  <Route path='/logout' element={<Logout/>}/>
  <Route path='/forgotpassword' element={<ForgotPassword/>}/>
</Routes>
</BrowserRouter>
</div>





</>
  );
}

export default App;
