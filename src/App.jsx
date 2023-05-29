import {useState } from 'react'
import AdminContainer from './pages/admin/AdminContainer';
import Products from './pages/Products';
import {Route, Routes } from "react-router-dom";
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized';
import Missing from './components/Missing';
import Layout from './components/Layout';
import Login from './pages/Login';
import Woker from './components/Woker';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ForgetPassword from './Pages/ForgetPassword'  
import ResetPassword from './Pages/ResetPassword'
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Product from './pages/Product';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {

  
  return (
    <div className=' text-sm font-normal text-gray-600 bg-white  font-merri '>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/p" element={<Woker/>} />
        <Route path="/cta" element={<AdminContainer/>} />
        <Route path="/products" element={<Product/>} />
        {/* <Route path="/products" element={<Products/>} /> */}
        <Route path="/products/details" element={<ProductDetails/>} />
        <Route path="/contactus" element={<Contact/>} /> 
        <Route path="/aboutus" element={<About/>} /> 
        <Route path="/forget-password" element={<ForgetPassword/>} />  
        <Route path="/reset-password" element={<ResetPassword/>} /> 
        <Route path="/" element={<Home/>} />
        
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin/*" element={<AdminContainer/>} /> 
        </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />
        
      </Route>
    </Routes>
    </div>
  )
}

export default App
