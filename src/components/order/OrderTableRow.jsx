import {  Badge } from 'flowbite-react'
import { Link } from 'react-router-dom'


const OrderTableRow = () => {
  return (
    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
        
        <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <Link  to='./detail' className=" hover:text-blue-700">
                Monitor BenQ EX2710Q
            </Link>
        </th>
        <td className="px-4 py-2">
            <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">TV/Monitor</span>
        </td>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center">
                <div className="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
                1242
            </div>
        </td>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">4.12</td>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">0.30</td>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <Badge color="failure" className='w-fit'>
            Cancelled
        </Badge>
        </td>
        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center">
                View
            </div>
        </td>
    </tr>
  )
}

export default OrderTableRow
