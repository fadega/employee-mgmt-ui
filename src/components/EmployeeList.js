import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeList = () => {

    const navigate = useNavigate()
  return (
    <div className='container mx-au my-8'>
      <div className='h-12'>
        <button 
            onClick={() => navigate('/addEmployee')}
            className='rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-700'>
            Add Employee
        </button>
      </div>
      <div className='flex shadow border-b'>
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className='text-left font-med px-6 py-3 text-gray-500 uppercase tracking-wider'>First Name</th>
                    <th className='text-left font-med px-6 py-3 first-letter:py-3 text-gray-500 uppercase tracking-wider'>Last Name</th>
                    <th className='text-left font-med px-6 py-3 first-letter:py-3 text-gray-500 uppercase tracking-wider'>Email ID</th>
                    <th className='text-right font-med px-6 py-3 text-gray-500 uppercase tracking-wider'>Actions</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                <tr>
                    <td className='px-6 py-4 whitespace-nowrap'> <div className='tex-sm text-gray-500'>Abun</div> </td>
                    <td className='px-6 py-4 whitespace-nowrap'><div className='tex-sm text-gray-500'>Adag</div> </td>
                    <td className='px-6 py-4 whitespace-nowrap'><div className='tex-sm text-gray-500'>abun@gmail.com</div> </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm'>
                        <a href="#" className=' text-indigo-600 hover:text-indigo-800 px-4'>Edit</a> 
                        <a href="#" className=' text-indigo-600 hover:text-indigo-800'>Delete</a> 
                    
                    </td>
                    
                </tr>
            </tbody>
        </table>

      </div>
    </div>
  )
}

export default EmployeeList
