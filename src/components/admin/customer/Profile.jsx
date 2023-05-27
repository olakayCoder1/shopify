import React from 'react'
import {BsTelephoneForward,BsTag } from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import {FaRegAddressBook} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'

const Profile = () => {
  return (
    <div>
      <div>
        <h1 className='ml-4 my-4 text-base font-medium'>Basic Information</h1>
        <div className=' ml-4'>
          <div className=' flex space-x-8 items-center py-4'>
            <p className=' flex items-center w-[100px]'>
              <AiOutlineUser className=' mr-2 text-xl text-gray-500'/>
              <span className='text-gray-500'>Name</span> 
            </p>
            <p className='text-base font-medium'>
              Olanrewaju Kabiru
            </p>
          </div>
          <div className=' flex space-x-8 items-center py-4'>
            <p className=' flex items-center w-[100px]'>
              <MdAlternateEmail className=' mr-2 text-xl text-gray-500'/>
              <span className='text-gray-500'>Email</span> 
            </p>
            <p className='text-base font-medium'>
              programmerolakay@gmail.com
            </p>
          </div>
          <div className=' flex space-x-8 items-center py-4'>
            <p className=' flex items-center w-[100px]'>
              <BsTelephoneForward className=' mr-2 text-xl text-gray-500'/>
              <span className='text-gray-500'>Phone</span> 
            </p>
            <p className='text-base font-medium'>
              09082455489
            </p>
          </div>
        </div>
        <h1 className='ml-4 my-4 text-base font-medium'>Address</h1>
        <div className=' ml-4'>
          <div className=' flex space-x-8 items-center py-4'>
            <p className=' flex items-center w-[100px]'>
              <BsTag className=' mr-2 text-xl text-gray-500'/>
              <span className='text-gray-500'>Address</span> 
            </p>
            <p className='text-base font-medium'>
              57 Abule Nla Road Ebute Meta West Lagos
            </p>
          </div>
          <div className=' flex space-x-8 items-center py-4'>
            <p className=' flex items-center w-[100px]'>
              <BsTag className=' mr-2 text-xl text-gray-500'/>
              <span className='text-gray-500'>State</span> 
            </p>
            <p className='text-base font-medium'>
              Lagos
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
