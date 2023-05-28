import { useState } from 'react'
import {Button} from 'flowbite-react'
import Profile from '../../components/admin/customer/Profile'
import Order from '../../components/admin/customer/Order'
// import SideBar from '../../components/admin/SideBar'
import SideBar from '../../components/admin/sidebar/SideBar'
import Header from '../../components/admin/Header'
import {CgProfile} from 'react-icons/cg'
import {BsBasket} from 'react-icons/bs'
import {GoSettings} from 'react-icons/go' 





const ProfileTab = ({Icon, name , isActive , handleClick }) => {

    const onClick = () => {
        handleClick(name) 
    } 
    return (
        <li className="mr-2 cursor-pointer" onClick={onClick}>
            <p className={`${isActive ? " text-blue-600  border-blue-600 rounded-t-lg  group" : "  border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group"} inline-flex p-4 border-b-2`}>
                <Icon className={`${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500 "} w-5 h-5 mr-2 "`}/>
                {name}
            </p>
        </li>
    )
}



const CustomerProfile = () => {
    const [currentTab , setCurrentTab] = useState('Profile')


    const handleClick = (e) => {
        setCurrentTab(e)
    }

   
    return (
    <div className=''>
      <div className=' bg-white '>
            <div className="text-center md:text-left md:flex md:space-x-4 md:items-start bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-4">
                <img
                    src="https://avatars.githubusercontent.com/u/95700260?v=4"
                    className="mx-auto md:mx-0 mb-4 w-32 rounded-lg"
                    alt="Avatar" />
                    <div>
                        <h5 className="mb-2 text-3xl font-medium leading-tight">Olanrewaju Kabiru</h5>
                        <p className="text-neutral-100">programmerolakay@gmail.com</p>
                        {/* <p className="text-neutral-100">57, Abule Nla Raod, Ebute Meta West Lagos * 09082455489</p> */}
                        <button type="button" class="py-2 px-5 mr-2 m-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-0 focus:ring-gray-200  ">Active</button>
                    
                    </div>
                
            </div>

            {/* Profile tab */}
            
            <div className=" border-b border-gray-300 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <ProfileTab Icon={CgProfile} name='Profile' isActive={currentTab === 'Profile'} handleClick={handleClick}/>
                    <ProfileTab Icon={BsBasket} name='Orders' isActive={currentTab === 'Orders'} handleClick={handleClick}/>
                    <ProfileTab Icon={GoSettings} name='Settings' isActive={currentTab === 'Settings'} handleClick={handleClick}/>
                    
                </ul>
            </div>

            {/*  */}
            <div className=' p-4'>
                {currentTab === 'Profile' && <Profile />}
                {currentTab === 'Orders' && <Order />}
            </div>
        </div>
    </div>
  )
}

export default CustomerProfile




