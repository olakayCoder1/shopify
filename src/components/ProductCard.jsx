import {motion} from 'framer-motion'
import { useState } from 'react';
import {MdShoppingBasket} from 'react-icons/md';
import { Link } from 'react-router-dom';


const ProductCard = ({product}) => {
    const [isCartHover, setIsCartHover] = useState(false);

  return (
    <motion.div whileHover={{scale:1.04}} className="mb-6 lg:mb-0 relative hover:border hover:border-gray-200 bg-red-500" >
        <motion.div whileTap={{scale:0.8}}  onMouseOver={()=> setIsCartHover(true)} onMouseLeave={()=> setIsCartHover(false)} 
             className="absolute bottom-0 right-0 btn-red p-1.5 capitalize flex items-center justify-center place-content-center cursor-pointer">
             {/* className="absolute bottom-0 right-0 left-0 h-8  bg-red-500 flex items-center justify-center place-content-center cursor-pointer text-white  text-xs px-2 py-1 m-2"> */}
            {isCartHover ? (
                <motion.p initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                ><MdShoppingBasket  className=' w-5 h-5'/></motion.p>
            ) : "Add to cart"}
        </motion.div>
        <div className="bg-white rounded-lg shadow-lg h-36 ">
            <div className="relative overflow-hidden bg-no-repeat bg-cover col-span-3">
                <img src={product?.image} className="w-full rounded-t-lg" />
                <Link to="/products/details">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </Link>
            </div>
            <div className="p-4">
                <h5 className="text-sm font-medium text-olakay-secondary mb-2">{product?.title}</h5>
                <p className="text-blue-500 mb-8">{product?.price}</p>
            
            </div>
        </div>
    </motion.div>
  )
}

export default ProductCard
