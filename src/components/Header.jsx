import React, { useState } from "react";
import { MdShoppingBasket, MdLogout ,MdOutlineLogin } from "react-icons/md";
import { motion } from "framer-motion";
import Logo from '../assets/Group 128.png';
import userlogo from "../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import Carts from '../components/carts/Carts'
import useProduct from "../hooks/useProduct";


const HeaderLink = ({ linkName, linkHref  }) => {

    const path = `#${linkHref}}`
   
    return (
        <Link to={linkHref} className={`${window.location.hash === path ? "text-blue-700":"text-red-600 " } text-sm font-medium  uppercase  duration-100 transition-all ease-in-out cursor-pointer  decoration-2"`}>
            {linkName}
        </Link>
    )
}



const Header = () => {

  const {getTotalQuantity  } = useProduct();
  const cartItemCount = getTotalQuantity();
  // const navigate = useNavigate()

  const [isMenu, setIsMenu] = useState(false);



  const [ showCart , setShowCart ] = useState(false)

    function handleCartShow(){
        setShowCart(!showCart)
    }

  return (
    <header className="fixed z-50 w-full border  p-2 px-4 md:p-3 md:px-16 border-b-[1px] bg-white">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full md:gap-2 lg:gap-0 items-center justify-between">
      <Link to='/'  className="flex items-center justify-between mr-4">
            <img
            src={Logo}
            className="mr-3 h-8"
            alt="Shopify"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopify</span>
        </Link>

       
        <div className="flex items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-6 " 
          >
            <HeaderLink linkName="Home" linkHref="/" />
            <HeaderLink linkName="Products" linkHref="/products" />
            <HeaderLink linkName="About Us" linkHref="/aboutus" />
            <HeaderLink linkName="Contact Us" linkHref="/contactus" />
          </motion.div>

          <div
            className="relative flex items-center justify-center"
            // onClick={showCart}
            onClick={handleCartShow}
          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItemCount}
                </p>
              </div>

          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={userlogo}
              className="min-w-[30px] h-8 w-8 min-h-[30px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={()=> setIsMenu(!isMenu)}
            />

            {isMenu && (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                    >
                  <Link to='/aboutus'  className=" lg:hidden px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    
                      
                     >
                    About Us
                  </Link>
                  <Link to='/contactus'  className=" lg:hidden px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    
                     >
                    Service
                  </Link>
                  <Link to='/login'
                    className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
           
              >
                Sign In <MdOutlineLogin />
              </Link>
              <Link to='/'
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                
              >
                 Logout <MdLogout />
              </Link>
              
              </motion.div>

            )}
             
          </div>
        </div>
      </div>
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      <Carts toggleCart={showCart} setToggleCart={handleCartShow}/>
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div onClick={handleCartShow}
          className="relative flex items-center justify-center" >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                2  
              </p>
            </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
        </Link>

        <div className="relative">
          {/* <motion.img
            whileTap={{ scale: 0.6 }}
            src={userlogo}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={()=> setIsMenu(!isMenu)}
          /> */}
          <motion.p whileTap={{ scale: 0.6 }}  onClick={()=> setIsMenu(!isMenu)}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full">
              <GiHamburgerMenu  className=" w-[90%] h-[90%]"/>
          </motion.p>
          
          {isMenu && (
              <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              <div className="flex flex-col ">
                <Link to='/'
                  className="text-base text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  
                >
                  Home
                </Link>
                <Link to='/products'
                  className="text-base text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  
                >
                  Product
                </Link>
                <Link to='/aboutus'
                  className="text-base text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  
                >
                  About Us
                </Link>
                <Link to='/contactus'
                  className="text-base text-textColor  duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  // onClick={() => setIsMenu(false)}
                >
                  Contact us
                </Link>
              </div>
              <Link to='/login' className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                // onClick={() => setIsMenu(false)}
              >
                Sign In <MdOutlineLogin />
              </Link>
              <Link to='/'
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                // onClick={() => setIsMenu(false)}
              >
                Logout <MdLogout />
              </Link>
            </motion.div>
          )}
          

        </div>
      </div>
    </header>
  );
};

export default Header;
