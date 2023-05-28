import {React , useState } from 'react'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/Products';
import AdminWrapper from './pages/admin/AdminWrapper'
import {Route, Routes } from "react-router-dom";
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized';
import Missing from './components/Missing';
import Layout from './components/Layout';
import Login from './pages/admin/Login';
import Woker from './components/Woker';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ForgetPassword from './Pages/ForgetPassword'

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {

  
  return (
    <div className=' text-sm font-normal text-gray-700 bg-white'>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/p" element={<Woker/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contactus" element={<Contact/>} /> 
        <Route path="/forget-password" element={<ForgetPassword/>} /> 
        <Route path="/reset-password" element={<ForgetPassword/>} /> 
        <Route path="/" element={<Home/>} />
        
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin/*" element={<AdminWrapper/>} /> 
        </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />
        
      </Route>
    </Routes>
    </div>
  )
}

export default App
