import {useState} from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer";
import {BsTelephoneForward,BsTag } from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import {FaRegAddressBook} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'


const Profile = () => {


    const k = 'https://mdbcdn.b-cdn.net/img/new/slides/146.webp'
  return (
    <div>
      <Header />
      <div>
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

      </div>
        <Footer />
    </div>
  )
}

export default Profile
