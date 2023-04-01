import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });
    const navigate= useNavigate()
    const handleChange=(e)=>{
        const value = e.target.value;
        // setEmployee({...employee, [e.target.name]: e.target.value})
        setEmployee({...employee, [e.target.name]: value})
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then(response => {
            console.log(response);
            navigate("/employeeList");
        }).catch(err => {
            console.log(err);
        })

       
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
       <div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
            <h1>Add New Employee</h1>

        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label htmlFor="" className='block text-gray-600 text-small font-normal'> First Name
            </label>
            <input 
                type="text"
                name='firstName'
                value={employee.firstName}
                onChange={(e) => handleChange(e)}

                className='border-2  rounded-md  h-10 px-2 py-2 mt-2 w-96' />
        </div>
        <div className='items-center justify-center h-14 w-full my-6'>
            <label htmlFor="" className='block text-gray-600 text-small font-normal'> Last Name
            </label>
            <input 
                type="text" 
                name='lastName'
                value={employee.lastName}
                onChange={(e) => handleChange(e)}
                className='border-2  rounded-md  h-10 px-2 py-2 mt-2 w-96' />
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
            <label htmlFor="email" className='block text-gray-600 text-small font-normal'> Email
            </label>
            <input 
                type="email"
                name='emailId'
                value={employee.emailId}
                onChange={(e) => handleChange(e)}
                className='border-2  rounded-md  h-10 px-2 py-2 mt-2 w-96' />
        </div>

        <div className='items-center justify-center h-14 w-full my-4 space-x-4 py-4'>
            <button 
                onClick={saveEmployee}
                className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                Save
            </button>
            <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>
                Cancel
            </button>
        </div>

       </div>
    </div>
  )
}

export default AddEmployee
