import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BsCalendar2Event,BsBasket} from 'react-icons/bs'
import {BiRefresh} from 'react-icons/bi'
import BreakDownCard from '../../components/admin/BreakDownCard'
import ProductTable from '../../components/example/ProductTable'


const Product = () => {
    const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const onClick = () => { setShow(!show) }
  const onClose = () => { setShow(false) }
  const fetchData = () => {}
  return (
    <div className=''>
      <div className=' '>
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
            </div>
            
          </div>
          {/* Analytics start */}
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
            <BreakDownCard Icon={BsBasket} cardTitle='Total Products' cardColor='blue' cardQuantity={'6,000'} />
            <BreakDownCard Icon={BsBasket} cardTitle='Active Products' cardColor='green' cardQuantity={'6,000'} />
            <BreakDownCard Icon={BsBasket} cardTitle='Disabled Products' cardColor='gray' cardQuantity={'6,000'} />
                   
          </div>
          <ProductTable />
        </div>
    </div>
  )
}

export default Product
