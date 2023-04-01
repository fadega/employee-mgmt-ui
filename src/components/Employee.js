import React from 'react'

const Employee = ({employee}) => {
  return (
    <tr >
    <td className="px-6 py-4 whitespace-nowrap"> <div className="tex-sm text-gray-500">{employee.firstName}</div> </td>
    <td className="px-6 py-4 whitespace-nowrap"><div className="tex-sm text-gray-500">{employee.lastName}</div> </td>
    <td className="px-6 py-4 whitespace-nowrap"><div className="tex-sm text-gray-500">{employee.emailId}</div> </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
        <a href="#" className=" text-indigo-600 hover:text-indigo-800 px-4">Edit</a> 
        <a href="#" className=" text-indigo-600 hover:text-indigo-800">Delete</a> 
    
    </td>
    
</tr>
  )
}

export default Employee
