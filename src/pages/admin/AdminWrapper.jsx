import SideBar from "../../components/admin/SideBar";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import CustomerProfile from "./CustomerProfile";
import Product from "./Product";
import CreateItem from "./CreateItem";
import Order from "./Order" ;
import OrderDetail from "./OrderDetail";
import Login from "./Login";
import {Route, Routes } from "react-router-dom";


const AdminWrapper = () => {
  return (
    <> 
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="" element={<Dashboard/>} />
        <Route path="/orders" element={<Order/>} />  
        <Route path="/orders/detail" element={<OrderDetail/>} />  
        <Route path="/products" element={<Product/>} />      
        <Route path="/products/create" element={<CreateItem/>} />      
        <Route path="/customers" element={<Customers/>} />  
        <Route path="/customers/profile" element={<CustomerProfile/>} />  
      </Routes>
    </>
  )
}

export default AdminWrapper
