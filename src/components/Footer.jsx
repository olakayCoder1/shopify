import Logo from '../assets/Group 128.png';
import {GoLocation} from 'react-icons/go'
import {BsTelephone,BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

const Footer = () => {
  return (
    
<footer className="bg-black text-white">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex justify-between ">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center mb-6">
                  <img src={Logo} className="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">Shopify</span>
              </a>
              <div className='flex flex-col space-y-4 text-gray-300'>
                <p className=' flex space-x-2 items-center'>
                    <span>
                        <GoLocation />
                    </span>
                    <span className=' text-xs'>25 Taiwo Street, Off Ogudu road, Ojota, Lagos.</span>
                </p>
                <p className=' flex space-x-2 items-center'>
                    <span>
                        <BsTelephone />
                    </span>
                    <span className=' text-xs'>+2349083368740, +2349083368743</span>
                </p>
                <p className=' flex space-x-2 items-center'>
                    <span>
                        <MdOutlineEmail />
                    </span>
                    <span className=' text-xs'>sales@doritstore.com</span>
                </p>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase">Resources</h2>
                  <ul className="text-gray-200  font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Our blog</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase">Follow us</h2>
                  <ul className="text-gray-300  font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/olakayCoder1" target='_blank' className="hover:underline ">Facebook</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://twitter.com/olakayCoder1" target='_blank' className="hover:underline">Twitter</a>
                      </li>
                      
                      <li>
                          <a  href="https://instagram.com/olakayCoder1" target='_blank' className="hover:underline">Instagram</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase">Legal</h2>
                  <ul className="text-gray-300  font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">© 2023 <a href="http://olanrewajukabiru.vercel.app/" target='_blank' className="hover:underline">olakayCoder1™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-300 hover: dark:hover:text-white">
                    <BsFacebook className='w-5 h-5'/>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-300 hover: dark:hover:text-white">
                    <BsInstagram className='w-5 h-5'/>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-300 hover: dark:hover:text-white">
                    <BsTwitter className='w-5 h-5'/>
                  <span className="sr-only">Twitter page</span>
              </a>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer
