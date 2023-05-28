import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Pagination, Modal , Button , Spinner } from 'flowbite-react'
// import SideBar from '../../components/admin/SideBar'
import SideBar from '../../components/admin/sidebar/SideBar'
import Header from '../../components/admin/Header'
import {BsCalendar2Event,BsBasket} from 'react-icons/bs'
import {BiRefresh} from 'react-icons/bi'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md' 
import {HiOutlineUsers} from 'react-icons/hi'
import BreakDownCard from '../../components/admin/BreakDownCard'
import OrderTable from '../../components/order/OrderTable'


const Dashboard = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const onClick = () => { setShow(!show) }
  const onClose = () => { setShow(false) }
  const fetchData = () => {}
  return (
    <div className=' '>
      <div className=''>
          <h2 className='mb-5 text-3xl font-semibold'>
            Good morning, <span className=' text-blue-500'>Olanrewaju</span>
          </h2>
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
              <p onClick={()=> navigate('/admin/products/create')} className=' shadow-lg text-white flex items-center space-x-1 p-1.5 px-3 rounded-md border border-blue-500 bg-blue-700  cursor-pointer'>
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
          <OrderTable />
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
  )
}

export default Dashboard
