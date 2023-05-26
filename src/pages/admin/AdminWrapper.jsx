import SideBar from "../../components/admin/SideBar";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import CustomerProfile from "./CustomerProfile";
import Order from "./Order" ;
import Login from "./Login";
import {Route, Routes } from "react-router-dom";


const AdminWrapper = () => {
  return (
    <> 
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="" element={<Dashboard/>} />
        <Route path="/orders" element={<Order/>} />  
        <Route path="/customers" element={<Customers/>} />  
        <Route path="/customers/profile" element={<CustomerProfile/>} />  
      </Routes>
    </>
  )
}

export default AdminWrapper
