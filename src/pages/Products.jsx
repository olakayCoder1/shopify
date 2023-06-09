import {useState} from 'react'
import Header from "../components/Header"
import Woker from "../components/Woker";
import Footer from "../components/Footer";
import  Carts from "../components/carts/Carts";


const Products = () => {


    const k = 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp'
  return (
    <div>
      <Header />
      <div>
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
                                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Mockups</button>
                                    </li>
                                    <li>
                                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Templates</button>
                                    </li>
                                    <li>
                                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Design</button>
                                    </li>
                                    <li>
                                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Logos</button>
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
            <Woker />
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Products
