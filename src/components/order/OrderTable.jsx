import { Pagination } from 'flowbite-react'
import OrderTableRow from './OrderTableRow'
import { useState } from 'react'


const OrderTable = () => {

    const [show, setShow] = useState(false)
    const [orderList, setOrderList] = useState([1,2,3,4])

    const fetchData = () => {}
  return (
    <div className=' w-full '>
        <section className="bg-gray-50  py-3 sm:py-5">
            <div className="mx-auto ">
                <div className="relative overflow-hidden bg-white shadow-md  sm:rounded-lg">
                    <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center flex-1 space-x-4">
                            <h5>
                                <span className="text-gray-500">All Pending:</span>
                                <span className="dark:text-white">123456</span>
                            </h5>
                            <h5>
                                <span className="text-gray-500">Total sales:</span>
                                <span className="dark:text-white">$88.4k</span>
                            </h5>
                        </div>
                        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                            <button type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                
                                Add new product
                            </button>
                            <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                Update stocks 1/250
                            </button>
                            <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                Export
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        {show ? (
                            <div className='flex justify-center place-content-center py-12'>
                            <Spinner
                                aria-label="Info spinner example"
                                color="info"
                                className="h-6 w-6"
                              />
                          </div>
                        ): (
                            <table className="w-full text-sm text-left text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
                                    <tr>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Order ID</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Customer</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Item QTTY</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Price</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">Date</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap">STATUS</th>
                                        <th scope="col" className="px-4 py-3 whitespace-nowrap"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderList.map((order, index) =>  <OrderTableRow key={index} /> )}
                                </tbody>
                            </table>
                        )}
                        

                    </div>


                    <div className='p-4'>
                        <Pagination currentPage={21} onPageChange={fetchData} totalPages={100} />
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default OrderTable