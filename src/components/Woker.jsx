import {useState , useEffect} from 'react';
import api from '../api/product';
import ProductCard from "./ProductCard"
import LoadingInApp from '../components/LoadingInApp'

const Woker = () => {

  const [featuredProduct, setFeaturedProduct] = useState(null)

  useEffect(()=>{
    const fetchProduct = async () => {
      try{
        const response = await api.get('/products?limit=5')
        setFeaturedProduct(response.data)
        // console.log(response)
      } catch(err){
        if(err.response){
          // Not in 200 range
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }else{
          console.log(err.message)
        }
        
      }
    }

    fetchProduct();
  },[])

  console.log(featuredProduct)

  return (
    <div>
      <div className="container mx-auto">

        <section className="mb-32 p-12 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured <u className="text-blue-600">Wears</u></h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {featuredProduct ? (
                featuredProduct.map((product, index )=> <ProductCard key={index} product={product} customStyle='text-red-600' />)
            ): (
              // <LoadingInApp />
              <>
                  <div className=" animate-pulse h-44 w-full bg-gray-100"></div>
                  <div className=" animate-pulse h-44 w-full bg-gray-100"></div>
                  <div className=" animate-pulse h-44 w-full bg-gray-100"></div>
                  <div className=" animate-pulse h-44 w-full bg-gray-100"></div>
                  <div className=" animate-pulse h-44 w-full bg-gray-100"></div>
              </>
              
            )}
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default Woker
