import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import Employee from './Employee';

const EmployeeList = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
              const response = await EmployeeService.getEmployees();
              setEmployees(response.data);
            } catch (error) {
              console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [])
    
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
            {!loading && (
             <tbody className="bg-white">
              {employees.map(employee => (
                <Employee employee = {employee} key = {employee.id} ></Employee>
                ))}
            </tbody>
            )}
        </table>

      </div>
    </div>
  )
}

export default EmployeeList
