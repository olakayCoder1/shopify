import { useState } from 'react'
import { Pagination, Modal , Button , Spinner } from 'flowbite-react'
import SideBar from '../../components/admin/SideBar'
import Header from '../../components/admin/Header'
import {BsCalendar2Event,BsBasket} from 'react-icons/bs'
import {BiRefresh} from 'react-icons/bi'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md' 
import {HiOutlineUsers} from 'react-icons/hi'
import BreakDownCard from '../../components/admin/BreakDownCard'



const Dashboard = () => {

  const [show, setShow] = useState(false)
  const onClick = () => { setShow(!show) }
  const onClose = () => { setShow(false) }
  const fetchData = () => {}
  return (
    <div className=' flex '>
      <SideBar />
      <div className=' grow bg-gray-100'>
        <Header pageName='Dashboard'/>
        <div className=' p-4'>
          <h2 className='mb-5 text-3xl font-semibold'>
            Good morning, <span className=' text-blue-500'>Olanrewaju</span>
          </h2>
          {/* Date card, Create item card and refresh page card */}
          <div className=' flex justify-between items-center'>
            <p className=' text-gray-500 flex items-center space-x-2 p-2 px-4 rounded-sm border border-gray-50 bg-white '>
              <span>
                <BsCalendar2Event className=' text-gray-700 w-4 h-4'/>
              </span>
              <span>April 21, 2030</span>
            </p>
            <div className=' flex items-center space-x-4'>
              <p onClick={()=> window.location.reload()}
                className='hidden text-gray-500 sm:flex items-center space-x-1 p-1.5 px-3 rounded-md border border-gray-50 bg-white cursor-pointer '>
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
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4'>
            <BreakDownCard Icon={MdOutlineProductionQuantityLimits} cardTitle='Online sessions' cardColor='green' cardQuantity={'6,000'} />
            <BreakDownCard Icon={HiOutlineUsers} cardTitle='Customers' cardColor='blue' cardQuantity={'6,000'} />
            <BreakDownCard Icon={BsBasket} cardTitle='Orders' cardColor='yellow' cardQuantity={'6,000'} />
                   
          </div>

          {/* Pending Order */}

          <div>
            <h2 className='my-4 text-base font-medium'>
              Pending Orders
            </h2>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                {show ? (
                  <div className=' flex justify-center place-content-center py-12'>
                    <Spinner
                        aria-label="Info spinner example"
                        color="info"
                        className="h-6 w-6"
                      />
                  </div>
                  
                ): (
                  <table class="w-full text-sm text-left text-gray-500 ">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                  Customer
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Product QTY
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Total
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Date
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  <span class="sr-only">Edit</span>
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Apple MacBook Pro 17"
                              </th>
                              <td class="px-6 py-4">
                                  Silver
                              </td>
                              <td class="px-6 py-4">
                                  Laptop
                              </td>
                              <td class="px-6 py-4">
                                  $2999
                              </td>
                              <td class="px-6 py-4 text-right">
                              <p onClick={onClick} class=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                              </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Microsoft Surface Pro
                              </th>
                              <td class="px-6 py-4">
                                  White
                              </td>
                              <td class="px-6 py-4">
                                  Laptop PC
                              </td>
                              <td class="px-6 py-4">
                                  $1999
                              </td>
                              <td class="px-6 py-4 text-right">
                              <p onClick={onClick} class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                              </td>
                          </tr>
                          <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Magic Mouse 2
                              </th>
                              <td class="px-6 py-4">
                                  Black
                              </td>
                              <td class="px-6 py-4">
                                  Accessories
                              </td>
                              <td class="px-6 py-4">
                                  $99
                              </td>
                              <td class="px-6 py-4 text-right">
                                  <p onClick={onClick} class=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
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

export default Dashboard
