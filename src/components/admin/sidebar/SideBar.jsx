import React from 'react'
import { Link } from "react-router-dom";
import {AiOutlineHome,AiOutlineHeart,AiOutlineSetting,AiOutlineUnorderedList} from 'react-icons/ai'
import {MdOutlineExplore,MdHistory,MdOutlineChat} from 'react-icons/md'
import {TbUser} from 'react-icons/tb' 
import {IoMdAddCircle} from 'react-icons/io'
import logo from '../../../assets/Group 128.png'
import {motion} from 'framer-motion'

function SideBarLink({Icon, name , hrefValue , isActive}){ 

  return (
    <li className={`${window.location.pathname === hrefValue ? 'border-l-4 border-blue-600' : ""}`}>
        <Link to={hrefValue} className="flex items-center p-2 px-4 hover:bg-going-secondary">
          <Icon className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
          <span className="ml-3">{name}</span>
        </Link>
    </li>
  )
}



function SideBar() {
  return (
    <div className=' '> 
      <aside id="cta-button-sidebar" className=" top-0 left-0 z-40 bg-white border-r-2 border-gray-100 w-[250px] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className=' flex '>  
            <Link to="/" className="flex items-center  w-full px-4 h-16 ">
                <img src={logo} className="h-6 mr-3" alt=" Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-going-primary">Going-Once</span>
            </Link>
            
        </div>
        <div className="h-full  py-4 overflow-y-auto ">
            <ul className="space-y-2 font-semibold text-gray-900">
              <SideBarLink Icon={AiOutlineHome} name='Home' isActive={true} hrefValue='/admin' />
              <SideBarLink Icon={MdOutlineExplore} name='Orders' isActive={false} hrefValue='/admin/orders' />  
              <SideBarLink Icon={AiOutlineHeart} name='Products' isActive={false} hrefValue='/admin/products' />
              <SideBarLink Icon={AiOutlineUnorderedList} name='Customers' isActive={false} hrefValue='/admin/customers' />
              <SideBarLink Icon={TbUser} name='Profile' isActive={false} hrefValue='profile' />
              <SideBarLink Icon={MdHistory} name='Bid History' isActive={false} hrefValue='/history' />
              <SideBarLink Icon={AiOutlineSetting} name='Settings' isActive={false} hrefValue='/settings' />
              <SideBarLink Icon={MdOutlineChat} name='Contact us' isActive={false} hrefValue='#' />
            </ul>
            <div id="dropdown-cta" className="p-4 m-4 mt-6 rounded-lg bg-blue-50 " role="alert">
              <div className="flex flex-col items-center place-content-center gap-3 mb-3">
                  <span className="border-2 border-white rounded-full"><IoMdAddCircle  className='w-8 h-8 text-going-primary'/></span>
                  <span className="font-semibold">Need Help</span>
                  <span className=" text-center text-xs">About Account management, Ordering & Payment refund and FAQ</span>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}  
                    type="button" className="text-white bg-going-primary  focus:outline-none focus:ring-blue-300  font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2">Customer service</motion.button>

              </div>
            </div> 
        </div>
      </aside>  
    </div>
  )
}

export default SideBar
