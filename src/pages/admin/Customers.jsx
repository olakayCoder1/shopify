import { useState } from 'react'
import {Link} from 'react-router-dom'
import { Pagination, Modal , Button , Spinner , Badge } from 'flowbite-react'
import SideBar from '../../components/admin/SideBar'
import Header from '../../components/admin/Header'
import {BsCalendar2Event,BsBasket} from 'react-icons/bs'
import {BiRefresh} from 'react-icons/bi'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md' 
import {HiOutlineUsers} from 'react-icons/hi'
import BreakDownCard from '../../components/admin/BreakDownCard'



const Customers = () => {

  const [show, setShow] = useState(false)
  const onClick = () => { setShow(!show) }
  const onClose = () => { setShow(false) }
  const fetchData = () => {}
  return (
    <div className=' flex bg-white'>
      <SideBar />
      <div className='w-full md:w-[80%]'>
        <Header pageName='Customers' />
        <div className=' p-4'>  
          {/* Date card, Create item card and refresh page card */}
          <div className=' flex justify-between items-center'>
            <p className=' shadow-md text-gray-500 flex items-center space-x-2 p-2 px-4 rounded-sm border border-gray-50 bg-white '>
              <span>
                <BsCalendar2Event className=' text-gray-700 w-4 h-4'/>
              </span>
              <span>April 21, 2030</span>
            </p>
            <div className=' flex items-center space-x-4'>
              <p onClick={()=> window.location.reload()}
                className=' shadow-md hidden text-gray-500 sm:flex items-center space-x-1 p-1.5 px-3 rounded-md border border-gray-50 bg-white cursor-pointer '>
                <span>
                  <BiRefresh className='w-6 h-6'/>
                </span>
                <span>Refresh</span>
              </p>
            </div>
            
          </div>
          {/* Analytics start */}
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
            <BreakDownCard Icon={HiOutlineUsers} cardTitle='Total ' cardColor='blue' cardQuantity={'6,000'} />
            <BreakDownCard Icon={HiOutlineUsers} cardTitle='Active' cardColor='green' cardQuantity={'6,000'} />
                   
          </div>

          {/* Pending Order */}

          <div  className=' w-full bg-white p-2'>
            <h2 className='my-4 text-base font-semibold'>
              Customers
            </h2>
            <div className=' my-4 flex space-x-4'>
              <div className='min-w-[200px] max-w-[250px]'> 
                
                <form className="flex items-center">   
                    <label for="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="search"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search customer" required />
                    </div>
                </form>
              </div>

              <div className='min-w-[200px] max-w-[250px]'>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                  <option selected>Filter by status</option>
                  <option value="US">Pending</option>
                  <option value="CA">Completed</option>
                  <option value="FR">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg ">
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
                  <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                          <tr>
                              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                  Order ID
                              </th>
                              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                  Customer
                              </th>
                              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                  Item Qty
                              </th>
                              
                              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                  Total
                              </th>
                              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                  Date
                              </th>
                              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                  Status
                              </th>
                              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                  <span className="sr-only">View</span>
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="bg-white border-b  hover:bg-gray-50 ">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  903HTW-fjfdnre-23943r4r384ufu3
                              </th>
                              <td className="px-6 py-4">
                                  Silver
                              </td>
                              <td className="px-6 py-4">
                                  12
                              </td>
                              <td className="px-6 py-4">
                                  12,000
                              </td>

                              
                              <td className="px-6 py-4">
                                  20/4/3434
                              </td>
                              <td className="px-6 py-4">
                              <Badge color="failure" className=' w-fit'>
                                Cancelled
                              </Badge>
                              </td>
                              <td className="px-6 py-4 text-right">
                              <Link to='./profile' className=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">view</Link>
                              </td>
                          </tr>
                          <tr className="bg-white border-b  hover:bg-gray-50 ">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  903HTW-fjfdnre-23943r4r384ufu3
                              </th>
                              <td className="px-6 py-4">
                                  Silver
                              </td>
                              <td className="px-6 py-4">
                                  12
                              </td>
                              <td className="px-6 py-4">
                                  12,000
                              </td>

                              
                              <td className="px-6 py-4">
                                  20/4/3434
                              </td>
                              <td className="px-6 py-4">
                              <Badge color="failure" className=' w-fit '>
                                Cancelled
                              </Badge>
                              </td>
                              <td className="px-6 py-4 text-right">
                              <Link to='./profile' className=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">view</Link>
                              </td>
                          </tr>
                          <tr className="bg-white border-b  hover:bg-gray-50 ">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  903HTW-fjfdnre-23943r4r384ufu3
                              </th>
                              <td className="px-6 py-4">
                                  Silver
                              </td>
                              <td className="px-6 py-4">
                                  12
                              </td>
                              <td className="px-6 py-4">
                                  12,000
                              </td>

                              
                              <td className="px-6 py-4">
                                  20/4/3434
                              </td>
                              <td className="px-6 py-4">
                              <Badge color="warning" className='w-fit'>
                                Pending
                              </Badge>
                              </td>
                              <td className="px-6 py-4 text-right">
                              <Link to='./profile' className=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">view</Link>
                              </td>
                          </tr>
                          <tr className="bg-white border-b  hover:bg-gray-50 ">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  903HTW-fjfdnre-23943r4r384ufu3
                              </th>
                              <td className="px-6 py-4">
                                  Silver
                              </td>
                              <td className="px-6 py-4">
                                  12
                              </td>
                              <td className="px-6 py-4">
                                  12,000
                              </td>

                              
                              <td className="px-6 py-4">
                                  20/4/3434
                              </td>
                              <td className="px-6 py-4">
                              <Badge color="success" className=' w-fit'>
                                Completed
                              </Badge>
                              </td>
                              <td className="px-6 py-4 text-right">
                              <Link to='./profile' className=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">view</Link>
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

export default Customers
