import {useState}from 'react'
import { Pagination,Spinner , Badge } from 'flowbite-react'
import {BiRefresh} from 'react-icons/bi'

const Order = () => {

    const [show, setShow] = useState(false)
    const onClick = () => { setShow(!show) }
    const onClose = () => { setShow(false) }
    const fetchData = () => {}

    return (
    <div className=' pb-8'>
        <h2 className='ml-4 my-4 text-base font-medium'>Order History</h2>
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
              <p onClick={()=> window.location.reload()}
                className='hidden text-gray-500 sm:flex items-center space-x-1 p-1.5 px-3 rounded-md border border-gray-50 bg-white cursor-pointer '>
                <span>
                  <BiRefresh className='w-6 h-6'/>
                </span>
                <span>Refresh</span>
              </p>
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
                                  12
                              </td>
                              <td class="px-6 py-4">
                                  12,000
                              </td>

                              
                              <td class="px-6 py-4">
                                  20/4/3434
                              </td>
                              <td class="px-6 py-4">
                              <Badge color="failure" className=' w-fit'>
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
                                  12
                              </td>
                              <td class="px-6 py-4">
                                  12,000
                              </td>

                              
                              <td class="px-6 py-4">
                                  20/4/3434
                              </td>
                              <td class="px-6 py-4">
                              <Badge color="failure" className=' w-fit'>
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
                                  12
                              </td>
                              <td class="px-6 py-4">
                                  12,000
                              </td>

                              
                              <td class="px-6 py-4">
                                  20/4/3434
                              </td>
                              <td class="px-6 py-4">
                              <Badge color="warning" className=' w-fit'>
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
                                  12
                              </td>
                              <td class="px-6 py-4">
                                  12,000
                              </td>

                              
                              <td class="px-6 py-4">
                                  20/4/3434
                              </td>
                              <td class="px-6 py-4">
                              <Badge color="success" className=' w-fit'> 
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
        {/* Pagination  */}
        <Pagination
            currentPage={1}
            onPageChange={fetchData}
            totalPages={100}
        />
    </div>
  )
}

export default Order
