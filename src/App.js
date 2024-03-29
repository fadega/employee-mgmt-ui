
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path='/' element={<EmployeeList />} />
          <Route path='/employeeList' element={EmployeeList} />
          <Route path='/addEmployee' element={<AddEmployee />} />
        </Routes>        
        {/* <EmployeeList /> 
        <AddEmployee />  */}
      </BrowserRouter>  
  
    </>
  );
}

export default App;
