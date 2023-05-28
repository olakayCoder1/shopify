import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination, Modal , Button , Spinner , Badge } from 'flowbite-react'
// import SideBar from '../../components/admin/SideBar'
import SideBar from '../../components/admin/sidebar/SideBar'
import Header from '../../components/admin/Header'
import {BsCalendar2Event,BsBasket, BsCart3} from 'react-icons/bs'
import {BiRefresh} from 'react-icons/bi'
import BreakDownCard from '../../components/admin/BreakDownCard'



const Order = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const onClick = () => { setShow(!show) }
  const onClose = () => { setShow(false) }
  const fetchData = () => {}
  return (
    <div className=''>
      <div className=''>
          {/* Date card, Create item card and refresh page card */}
          <div className=' flex justify-between items-center'>
            <p className=' shadow-lg text-gray-500 flex items-center space-x-2 p-2 px-4 rounded-sm border border-gray-50 bg-white '>
              <span>
                <BsCalendar2Event className=' text-gray-700 w-4 h-4'/>
              </span>
              <span>April 21, 2030</span>
            </p>
            <div className=' flex items-center space-x-4'>
              <p onClick={()=> window.location.reload()}
                className=' shadow-lg hidden text-gray-500 sm:flex items-center space-x-1 p-1.5 px-3 rounded-md border border-gray-50 bg-white cursor-pointer '>
                <span>
                  <BiRefresh className='w-6 h-6'/>
                </span>
                <span>Refresh</span>
              </p>
              {/* <p onClick={()=> navigate('/admin/products/create')} className=' shadow-lg text-white flex items-center space-x-1 p-1.5 px-3 rounded-md border border-blue-500 bg-blue-700  cursor-pointer'>
                <span>Add product</span>
              </p> */}
            </div>
            
          </div>
          {/* Analytics start */}
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
            <BreakDownCard Icon={BsCart3} cardTitle='Total orders' cardColor='blue' cardQuantity={'6,000'} />
            <BreakDownCard Icon={BsCart3} cardTitle='Completed orders' cardColor='green' cardQuantity={'6,000'} />
            <BreakDownCard Icon={BsCart3} cardTitle='Pending orders' cardColor='yellow' cardQuantity={'6,000'} />
            <BreakDownCard Icon={BsCart3} cardTitle='Cancelled orders' cardColor='red' cardQuantity={'6,000'} />
                   
          </div>

          {/* Pending Order */}

          <div  className=' w-full bg-white p-2'>
            <h2 className='my-4 text-base font-medium'>
              Order History
            </h2>
            <div className=' my-4 flex space-x-4'>
              <div className='min-w-[200px] max-w-[250px]'> 
                
                <form class="flex items-center">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="search"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search order" required />
                    </div>
                </form>
              </div>

              <div className='min-w-[200px] max-w-[250px]'>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                  <option selected>Filter by status</option>
                  <option value="US">Pending</option>
                  <option value="CA">Completed</option>
                  <option value="FR">Cancelled</option>
                </select>
              </div>
            </div>
            <div class="overflow-x-auto shadow-md sm:rounded-lg ">
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
                              <Badge color="failure">
                                Cancelled
                              </Badge>
                              </td>
                              <td class="px-6 py-4 text-right">
                              <p onClick={onClick} class=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">view</p>
                              </td>
                          </tr>
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
                              <Badge color="failure">
                                Cancelled
                              </Badge>
                              </td>
                              <td class="px-6 py-4 text-right">
                              <p onClick={onClick} class=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">view</p>
                              </td>
                          </tr>
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
                              <Badge color="warning">
                                Pending
                              </Badge>
                              </td>
                              <td class="px-6 py-4 text-right">
                              <p onClick={onClick} class=" cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline">view</p>
                              </td>
                          </tr>
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
                              <Badge color="success">
                                Completed
                              </Badge>
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
            Order Details
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
            <div class="flex justify-between py-6">
              <div class="text-gray-800 text-left flex-1 text-[18px]">
                  Discount
                </div> 
                <div class="text-left w-40">
                  <label  for="Discount" class="FormDigitsInput w-100 relative">
                    <div  class="">
                      <span > </span>
                    </div> 
                    <div  class="relative">
                      <div  class="absolute inset-y-0 top-[-4px] left-0 items-center pl-3 pointer-events-none flex">
                        <svg  width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.46 4.537v.994H.318v-.994H10.46zm0 2.148v.994H.318v-.994H10.46zM9.426.818V11H8.233L2.685 3.006h-.1V11H1.352V.818h1.193l5.569 8.014h.1V.818h1.212z" fill="#6B7280"></path>
                        </svg>
                      </div> 
                      <input  id="Discount" autocomplete="off" name="Discount" placeholder="0.00" type="text" class="FormDigitsInput__field bg-white border text-[12px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-3 [object Object] 0" /> 
                      <div  class="absolute inset-y-0 top-[-4px] right-0 items-center pr-3 pointer-events-none flex">
                        <svg  width="31" height="12" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.064 11L1.702 2.908V11H.33V1.074h1.834L7.12 8.69V1.074h1.372V11H7.064zm11.57 0l-.126-1.4a3.07 3.07 0 01-.448.588 3.38 3.38 0 01-.686.518c-.261.15-.564.27-.91.364a4.24 4.24 0 01-1.134.14 4.96 4.96 0 01-1.806-.336 4.505 4.505 0 01-1.54-.994 4.893 4.893 0 01-1.078-1.624c-.261-.644-.392-1.386-.392-2.226 0-.84.14-1.582.42-2.226.28-.644.649-1.18 1.106-1.61a4.77 4.77 0 011.582-.994 5.034 5.034 0 011.806-.336c.541 0 1.046.075 1.512.224.476.14.9.34 1.274.602.383.261.71.579.98.952.28.364.49.77.63 1.218l-1.246.532c-.224-.719-.611-1.274-1.162-1.666-.55-.401-1.213-.602-1.988-.602-.448 0-.882.08-1.302.238-.42.159-.793.401-1.12.728a3.751 3.751 0 00-.798 1.232c-.196.485-.294 1.055-.294 1.708 0 .663.094 1.241.28 1.736.196.485.453.891.77 1.218.327.327.695.574 1.106.742.42.159.854.238 1.302.238.55 0 1.018-.084 1.4-.252.383-.177.696-.397.938-.658a2.55 2.55 0 00.532-.84c.112-.308.177-.588.196-.84h-3.444V6.142h4.746V11h-1.106zm10.073 0l-5.362-8.092V11h-1.372V1.074h1.834l4.956 7.616V1.074h1.372V11h-1.428z" fill="#6B7280"></path>
                        </svg>
                      </div>
                    </div> 
                    <div  class="w-full relative"></div>
                  </label>
                </div>
              </div> 
              <p className="text-base leading-relaxed ">
                With less than a month to go before the European 
                Union enacts new consumer 
                privacy laws for its citizens, 
                companies around the world 
                are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed ">
                The European Union’s General Data 
                Protection Regulation (G.D.P.R.) 
                goes into effect on May 25 and is 
                meant to ensure a common set of data 
                rights in the European Union. 
                It requires organizations to notify users 
                as soon as possible of high-risk 
                data breaches that could personally affect them.
              </p>
              <div class="overflow-x-auto shadow-md sm:rounded-lg ">
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
                                  Product
                              </th>
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  Price
                              </th>
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  Quantity
                              </th>
                              
                              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                  Total
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="bg-white border-b  hover:bg-gray-50 ">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  903HTW-fjfdnre
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
                          </tr>
                          <tr class="bg-white border-b  hover:bg-gray-50 ">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  903HTW-fjfdnre
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
                          </tr>
                          <tr class="bg-white border-b  hover:bg-gray-50 ">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  903HTW-fjfdnre
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
                          </tr>
                          <tr class="bg-white border-b  hover:bg-gray-50 ">
                              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  903HTW-fjfdnre
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
                          </tr>
                      </tbody>
                  </table>
                )}  
            </div>
            <div class="border-t pt-10 pb-5">
                <div class="flex justify-between">
                  <div class="text-xl text-black text-left flex-1 font-semibold">
                    Total amount
                  </div> 
                  <div class="text-right w-40">
                    <div class="flex justify-between items-center">
                      <div>
                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.977 20.948a1.031 1.031 0 102.062 0H7.977zm1.03-13.896l.827-.617a1.031 1.031 0 00-1.857.617h1.03zm10.39 13.896l-.825.617a1.031 1.031 0 001.857-.617h-1.032zM20.43 7.052a1.031 1.031 0 10-2.063 0h2.063zm-10.39 13.896V7.052H7.977v13.896h2.062zM8.182 7.67l10.39 13.895 1.651-1.235L9.833 6.435 8.183 7.67zm12.247 13.278V7.052h-2.063v13.896h2.063z" fill="#000"></path><path d="M5.773 14.269h16.453" stroke="#000" stroke-width="2.063" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </div> 
                      <div>
                        <p class="text-[18px] text-slate-900">
                          &nbsp;26,930,586.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  )
}

export default Order
