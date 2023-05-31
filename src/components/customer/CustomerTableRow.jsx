import {  Badge } from 'flowbite-react'
import { Link } from 'react-router-dom'


const CustomerTableRow = () => {
  return (
    <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
        
        <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
            
            <Link  to='./profile' class=" hover:text-blue-700">
                ye737382hs-GSTAT-BenQ EX2710Q
            </Link>
        </th>
        <td class="px-4 py-2">
            <span class="bg-primary-100 text-primary-800  font-medium px-2 py-0.5 rounded">Olanrewaju AbdulKabeer</span>
        </td>
        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
            <div class="flex items-center">
                <div class="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
                1242
            </div>
        </td>
        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">4.12</td>
        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
        <Badge color="success" className='w-fit'>
            Active
        </Badge>
        </td>
        <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
            <Link  to='./profile' class="flex items-center text-blue-800">
                View
            </Link>
        </td>
    </tr>
  )
}

export default CustomerTableRow
