import React from 'react'
import {Sidebar} from 'flowbite-react'
import {HiChartPie, HiShoppingBag, HiInbox, HiUser, HiArrowSmRight, HiTable} from 'react-icons/hi'

const SideBar = () => {
  return (
    <>
      <div className=" min-w-[250px] h-screen bg-gray-700 hidden md:block">
        {/* <Sidebar aria-label="Sidebar with multi-level dropdown example" className='bg-slate-500  h-screen'>
          <Sidebar.Items className=''>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="#"
                icon={HiChartPie}
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse
                icon={HiShoppingBag}
                label="E-commerce"
              >
                <Sidebar.Item href="#">
                  Products
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item
                href="#"
                icon={HiInbox}
              >
                Inbox
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiUser}
              >
                Users
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiShoppingBag}
              >
                Products
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiArrowSmRight}
              >
                Sign In
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiTable}
              >
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar> */}
      </div>
    </>
  )
}

export default SideBar
