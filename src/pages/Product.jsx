import {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer";
import api from '../api/axios';
import { motion } from 'framer-motion';
import ExampleComponent from '../ExampleComponent';
import ProductCard from '../components/ProductCard';


const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]



export const CategoryTab = ({linkName, linkHref , isActive , setCategory}) => {
    const setProductCategory = () => {
        if(linkHref !== '#'){
            setCategory(linkHref)
        }else{
            setCategory('all')
        }
    }
    
    return (
        <li onClick={setProductCategory} className="mr-2">
            <p  className={`${linkHref === isActive ? "text-blue-600 border-b-2 border-blue-600" : "border-transparent  hover:text-gray-600 hover:border-gray-300"}  cursor-pointer inline-block whitespace-nowrap p-4 border-b-2  rounded-t-lg uppercase `}>{linkName}</p>
        </li>
    )
}



export default function Product() {

    const [featuredProduct, setFeaturedProduct] = useState(null)
    const [productCategory, setProductCategory] = useState('electronics')
    const [ loadingProduct, setLoadingProduct] = useState(false)
    const [ activeCategory, setActiveCategory] = useState('electronics')

    const setCategory = (category) => setProductCategory(category)  ;

    useEffect(()=>{
    const fetchProduct = async () => {
        setLoadingProduct(true)
      try{
        if(productCategory === 'all'){
            const response = await api.get(`/products`)
            setFeaturedProduct(response.data)
            setLoadingProduct(false)
        }
        else{
            const response = await api.get(`/products/category/${productCategory}`)
            setFeaturedProduct(response.data)
            setActiveCategory(productCategory)
            setLoadingProduct(false)
        }
        
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
    },[productCategory])

    const k = 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp'
    console.log(featuredProduct)
  return (
 


<div>
    <Header />
    <div>
        <section className="mb-16 h-1/2 w-full">
            <div className="relative overflow-hidden bg-no-repeat  bg-fixed bg-center bg-cover "   style={{backgroundPosition: '50%', backgroundImage: `url(${k})`, height: '300px',}}  >
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed " style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}  >
                    <div className="flex justify-center items-center h-full">
                        
                    <form className='w-[70%]  md:w-[60%] text-center  px-6 md:px-12'>
                        <div className="flex">
                            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Your Email</label>
                            <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Electronics</button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Jewelery</button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Men's Clothing</button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">women's clothing</button>
                                </li>
                                
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Bag</button>
                                </li>
                                </ul>
                            </div>
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm bg-gray-50 rounded-r-md   focus:ring-0 " placeholder="Search products..." required />
                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-md border border-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none  ">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>

                    </div>
                </div>
            </div>
        </section>
        <div className="bg-white text-center ">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200  mx-auto  md:max-w-4xl">
                <ul className="flex flex-nowrap -mb-px overflow-x-auto">
                    <CategoryTab linkName='electronics'  linkHref='electronics' isActive={activeCategory} setCategory={setCategory} />
                    <CategoryTab linkName='jewelry'  linkHref='jewelery' isActive={activeCategory} setCategory={setCategory}/>
                    <CategoryTab linkName="men's clothing"  linkHref='#' isActive={activeCategory} setCategory={setCategory}/>
                    <CategoryTab linkName="women's clothing"  linkHref='#' isActive={activeCategory} setCategory={setCategory}/>
                    <CategoryTab linkName="Bag"  linkHref='#' isActive={activeCategory} setCategory={setCategory}/>
                    
                </ul>
            </div>
            <div className="mx-auto w-[90%]   px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="w-full grid grid-cols-1 gap-x-6 space-y-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {!loadingProduct ? (
                    featuredProduct?.length > 0 &&  (
                        featuredProduct.map((product, index )=> <ProductCard key={index} product={product}  />)
                    )
                    
                ): (
                // <LoadingInApp />
                <>
                    <div className=" animate-pulse h-44 w-full bg-gray-100"></div>
                    <div className=" animate-pulse h-44 w-full bg-gray-100"></div>
                    <div className=" animate-pulse h-44 w-full bg-gray-100"></div>
                    <div className=" animate-pulse h-44 w-full bg-gray-100"></div>
                </>
                
                )}
                
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
  )
}