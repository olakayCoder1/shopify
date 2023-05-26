import { useState } from 'react'
import Profile from '../../components/admin/customer/Profile'
import SideBar from '../../components/admin/SideBar'
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
                <Icon class={`${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500 "} w-5 h-5 mr-2 "`}/>
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
    <div className=' flex '>
      <SideBar />
      <div className='w-full md:w-[80%] bg-gray-100'>
        <Header pageName='Customers' />
        <div className=' p-4'>
            <div class="text-center">
                <img
                    src="https://avatars.githubusercontent.com/u/95700260?v=4"
                    class="mx-auto mb-4 w-32 rounded-lg"
                    alt="Avatar" />
                <h5 class="mb-2 text-xl font-medium leading-tight">Olanrewaju Kabiru</h5>
                <p class="text-neutral-500 dark:text-neutral-400">programmerolakay@gmail.comr</p>
                <p class="text-neutral-500 dark:text-neutral-400">57, Abule Nla Raod, Ebute Meta West Lagos</p>
            </div>

            {/* Profile tab */}
            
            <div class="border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <ProfileTab Icon={CgProfile} name='Profile' isActive={currentTab === 'Profile'} handleClick={handleClick}/>
                    <ProfileTab Icon={BsBasket} name='Orders' isActive={currentTab === 'Orders'} handleClick={handleClick}/>
                    <ProfileTab Icon={GoSettings} name='Settings' isActive={currentTab === 'Settings'} handleClick={handleClick}/>
                    
                </ul>
            </div>

            {/*  */}
            <div>
                <Profile />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile




