import React, { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import EmptyCart from "../../assets/emptyCart.svg";
import CartItem from "./CartItem";
import useProduct from "../../hooks/useProduct";
import { TbCurrencyNaira } from "react-icons/tb";
import useAuth from "../../hooks/useAuth";


const Carts = ({ toggleCart , setToggleCart }) => {

  const { auth } = useAuth();
  const { cart , getTotalQuantity , getTotalPrice , clearCart } = useProduct();
  const cartItemCount = getTotalQuantity();
  const cartTotalPrice = getTotalPrice();
  

  const [flag, setFlag] = useState(1);
  console.log(auth)

      function handleCart(){
        setToggleCart()
      }

  return (
    
    
    <motion.div transition={{ duration:2}}
      // jus added
      onViewportEnter={{duration: 2}}
      className={`${toggleCart ? "fixed duration-300 w-full md:w-[375px]  h-screen bg-white drop-shadow-md top-0 right-0  flex flex-col z-[101] pb-20 " : "hidden "} translate-x-3 `}
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}   onClick={handleCart} >
          <MdOutlineKeyboardBackspace className="text-gray-700 text-3xl" />
        </motion.div>
        <p className="text-gray-700 text-lg font-semibold">Cart</p>

        <motion.p  whileTap={{ scale: 0.8 }}  onClick={()=> clearCart()}
          className="flex items-center   gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-gray-700 text-base"
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {cart?.length > 0 ? (
        <div className="w-full h-full  rounded-t-[2rem] flex flex-col">
          {/* cart Items section */}
          <div className="w-full md:w-[375px] h-340 md:h-42 divide-y-2 p-2 pb-10 flex flex-col overflow-y-auto">
            {/* cart Item */}
            {cart?.length > 0 &&
              cart.map((item,index) => (
                <CartItem
                  key={index}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                  onClick={handleCart}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-700 text-lg">Total Items</p>
              <p className="text-gray-700 text-lg">{cartItemCount}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-700 text-lg">Delivery</p>
              <p className="flex items-center text-gray-700 text-lg">
                <TbCurrencyNaira />
                {cartTotalPrice / 5 }</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-700 text-xl font-semibold">Total</p>
              <p className=" flex items-center text-gray-700 text-xl font-semibold">
                <TbCurrencyNaira className=" w-6 h-6"/>
                {cartTotalPrice ? cartTotalPrice : 0}
              </p>
            </div>

            {auth ? (
              <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="btn-red "
            >
              Check Out
            </motion.button>
              
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="btn-red "
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-gray-700 font-normal">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Carts;

