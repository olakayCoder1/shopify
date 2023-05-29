import { useState } from "react";
import {Route, Routes , Link  } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import logo from '../../assets/Group 128.png'
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import CustomerProfile from "./CustomerProfile";
import Product from "./Product";
import CreateItem from "./CreateItem";
import Order from "./Order" ;
import OrderDetail from "./OrderDetail";
import Login from "./Login";


const AdminContainer = () => {

    const [showSideBar, setShowSideBar] = useState(false)
    
    

  return (
    <div className="antialiased bg-gray-50 ">
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5  fixed left-0 right-0 top-0 z-50">
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-start items-center">
                <button onClick={()=> setShowSideBar(!showSideBar)} 
                    className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100  focus:ring-2 focus:ring-gray-100"
                >
                    <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillfule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                    <svg aria-hidden="true" className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillfule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                    <span className="sr-only">Toggle sidebar</span>
                </button>
                <Link to='/'  className="flex items-center justify-between mr-4">
                    <img
                    src={logo}
                    className="mr-3 h-8"
                    alt="Shopify"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopify</span>
                </Link>
                
                
                </div>
                <div className="flex items-center lg:order-2">
                            
                <button
                    type="button"
                    className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown"
                >
                    <span className="sr-only">Open user menu</span>
                    <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                    alt="user photo"
                    />
                </button>
                </div>
            </div>
        </nav>
        {/* <!-- Sidebar --> */}
        <SideBar showSideBar={showSideBar}/>

        <main className="p-4 md:ml-64 h-auto pt-20">
            <Routes>
                <Route path="" element={<Dashboard/>} />
                <Route path="/orders" element={<Order/>} />  
                <Route path="/orders/detail" element={<OrderDetail/>} />  
                <Route path="/products" element={<Product/>} />      
                <Route path="/products/create" element={<CreateItem/>} />      
                <Route path="/customers" element={<Customers/>} />  
                <Route path="/customers/profile" element={<CustomerProfile/>} />  
            </Routes>
        </main>
    </div>
  )
}

export default AdminContainer
