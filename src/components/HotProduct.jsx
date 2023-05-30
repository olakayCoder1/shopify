import {useState , useEffect} from 'react';
import api from '../api/axios';
// import ProductCard from "./ProductCard"
import LoadingInApp from './LoadingInApp'
import ProductCard  from './ProductCard' 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Woker = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  
  let slidesPerView = 4;
  if (isTablet) {
    slidesPerView = 3;
  } else if (isMobile) { 
    slidesPerView = 1;
  }
  const [featuredProduct, setFeaturedProduct] = useState(null)

  useEffect(()=>{
    const fetchProduct = async () => {
      try{
        const response = await api.get('/products?limit=10')
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

  console.log(slidesPerView)

  return (
    <div>
      <div className="container mx-auto">

        <section className="mb-32 p-12 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured <u className="text-blue-600">Wears</u></h2>
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8"> */}
            {featuredProduct ? (
              <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={slidesPerView}
                  navigation
                  pagination={false}
                  scrollbar={false} 
                  onSwiper={(swiper) => console.log('')}
                  onSlideChange={() => console.log('')}
              >
              {featuredProduct?.map((product, index )=> {
                return (
                  <SwiperSlide key={index} >
                    <ProductCard key={index} product={product} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
                
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
          {/* </div> */}
        </section>
        
      </div>
    </div>
  )
}

export default Woker
