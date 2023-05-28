import {Link } from 'react-router-dom'

function SideBarLink({Icon , linkName, linkHref ,isActive }) {
  return (
    <li>
        <Link to={linkHref}
            className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg  hover:bg-gray-100  group"
        >
            <Icon className="w-6 h-6 group-hover:text-gray-900"/>
            <span className="ml-3">{linkName}</span>
        </Link>
        </li>
  )
}

export default SideBarLink
