import React, {  useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import {TbCurrencyNaira} from 'react-icons/tb'
import useProduct from "../../hooks/useProduct";



const CartItem = ({ item, setFlag, flag }) => {

  const { cart , addToCart , decreaseQuantity } = useProduct();

  const handleAddToCart = () =>  addToCart(item.product); 
  const handleRemoveFromCart = () =>  decreaseQuantity(item.product); 

  return (
    <div className="w-full  p-1  gap-2 text-gray-700 ">
      {/* <img
        src={item?.product?.image}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      /> */}

      {/* name section */}
      <div className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded" src={item?.product?.image} alt={item?.product?.title} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                            {item.product.title}
                        </p>
                        <p className=" flex items-center truncate">
                            <TbCurrencyNaira className="w-5 h-5" />
                            {item.product.price}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold  ">
                    <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                      <motion.div
                        whileTap={{ scale: 0.75 }}
                        onClick={handleRemoveFromCart}
                      >
                        <BiMinus className="text-red-800 " />
                      </motion.div>

                      <p className="w-5 h-5 rounded-sm bg-cartBg text-red-900 flex items-center justify-center">
                        {item.quantity}
                      </p>

                      <motion.div
                        whileTap={{ scale: 0.75 }}
                        onClick={handleAddToCart}
                      >
                        <BiPlus className=" " />
                      </motion.div>
                    </div>
                    </div>
                </div>
            </div>

      {/* button section */}
      {/* <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
        >
          <BiMinus className="text-red-800 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-red-900 flex items-center justify-center">
          {3}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
        //   onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div> */}
    </div>
  );
};

export default CartItem;
