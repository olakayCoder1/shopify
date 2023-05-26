import { useState } from 'react'
import { Pagination, Modal , Button , Spinner } from 'flowbite-react'
import SideBar from '../../components/admin/SideBar'
import Header from '../../components/admin/Header'
import {BsCalendar2Event,BsBasket} from 'react-icons/bs'
import {BiRefresh} from 'react-icons/bi'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md' 
import {HiOutlineUsers} from 'react-icons/hi'
import BreakDownCard from '../../components/admin/BreakDownCard'



const Order = () => {

  const [show, setShow] = useState(false)
  const onClick = () => { setShow(!show) }
  const onClose = () => { setShow(false) }
  const fetchData = () => {}
  return (
    <div className=' flex '>
      <SideBar />
      <div className='grow bg-gray-100'>
        <Header pageName='Orders' />
        <div className=' p-4'>
          {/* Date card, Create item card and refresh page card */}
          <div className=' flex justify-between items-center'>
            <p className=' text-gray-500 flex items-center space-x-2 p-2 px-4 rounded-sm border border-gray-50 bg-white '>
              <span>
                <BsCalendar2Event className=' text-gray-700 w-4 h-4'/>
              </span>
              <span>April 21, 2030</span>
            </p>
            <div className=' flex items-center space-x-4'>
              <p className='hidden text-gray-500 sm:flex items-center space-x-1 p-1.5 px-3 rounded-md border border-gray-50 bg-white cursor-pointer '>
                <span>
                  <BiRefresh className='w-6 h-6'/>
                </span>
                <span>Refresh</span>
              </p>
              <p className='text-white flex items-center space-x-1 p-1.5 px-3 rounded-md border border-blue-500 bg-blue-700  cursor-pointer'>
                <span>Add product</span>
              </p>
            </div>
            
          </div>
          {/* Analytics start */}
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
            <BreakDownCard Icon={BsBasket} cardTitle='Total orders' cardColor='blue' cardQuantity={'6,000'} />
            <BreakDownCard Icon={BsBasket} cardTitle='Completed orders' cardColor='green' cardQuantity={'6,000'} />
            <BreakDownCard Icon={BsBasket} cardTitle='Pending orders' cardColor='yellow' cardQuantity={'6,000'} />
            <BreakDownCard Icon={BsBasket} cardTitle='Cancelled orders' cardColor='red' cardQuantity={'6,000'} />
                   
          </div>

          {/* Pending Order */}

          <div  className=' w-full'>
            <h2 className='my-4 text-base font-medium'>
              Pending History
            </h2>
            <div class="overflow-x-auto shadow-md sm:rounded-lg p-8 bg-green-700">
                {show ? (
                  <div className='flex justify-center place-content-center py-12'>
                    <Spinner
                        aria-label="Info spinner example"
                        color="info"
                        className="h-6 w-6"
                      />
                  </div>
                  
                ): (
                    // <div>skdkdkkd</div>
                  <table class="w-full text-sm text-left text-gray-500 ">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                          <tr>
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  Order ID
                              </th>
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  Customer
                              </th>
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  Item Qty
                              </th>
                              
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  Total
                              </th>
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  Date
                              </th>
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  Status
                              </th>
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  <span class="sr-only">Edit</span>
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="bg-white border-b  hover:bg-gray-50 ">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  903HTW-fjfdnre-23943r4r384ufu3
                              </th>
                              <td class="px-6 py-4">
                                  Silver
                              </td>
                              <td class="px-6 py-4">
                                  12
                              </td>
                              <td class="px-6 py-4">
                                  12,000
                              </td>

                              
                              <td class="px-6 py-4">
                                  20/4/3434
                              </td>
                              <td class="px-6 py-4">
                                  completed
                              </td>
                              <td class="px-6 py-4 text-right">
                              <p onClick={onClick} class=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">view</p>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                )}
                
            </div>

          </div>
          {/* Pagination  */}
          <Pagination
              currentPage={1}
              onPageChange={fetchData}
              totalPages={100}
          />
        </div>



        {/* View Product Modal */}
        {/* <Button onClick={onClick}>
          Toggle modal
        </Button> */}
        <Modal
          dismissible
          show={show}
          onClose={onClose}
        >
          <Modal.Header>
            Terms of Service
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onClick}>
              I accept
            </Button>
            <Button
              color="gray"
              onClick={onClick}
            >
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Order
