import SideBar from "../../components/admin/SideBar";
import Dashboard from "./Dashboard";
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
      </Routes>
    </>
  )
}

export default AdminWrapper
