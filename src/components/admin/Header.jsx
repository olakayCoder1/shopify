import { Avatar } from "flowbite-react"
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({pageName}) => {
  return (
    <header className="flex items-center justify-between space-x-4 p-4 bg-white shadow-md">
      <section className=" flex space-x-2 items-center">
        <p className=" p-1 rounded cursor-pointer md:hidden">
          <AiOutlineMenu className="w-5 h-5 sm:w-6 sm:h-6"/>
        </p>
        <h2 className=" text-lg font-medium">{pageName}</h2>
      </section>
      <section>
      <Avatar
          // className=" w-6 h-6 sm:w-8 sm:h-8"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        >
          <div className="hidden sm:block space-y-1 font-medium ">
            <div>
              Jese Leos
            </div>
            <div className=" text-xs">
              olakay@gmail.com
            </div>
          </div>
        </Avatar>
        <div > 
       
        <div>
            <span></span>
        </div>
        </div>
      </section>
    </header>
  )
}

export default Header


{/* <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true} bordered={true}
        /> */}