import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ExpensesList from './pages/expenses/ExpensesList'
import EmployeesList from './pages/employees/EmployeesList'
import ClientsList from './pages/clients/ClientsList'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={
            <ProtectedRoute><Dashboard/></ProtectedRoute>
          } />
          <Route path="/expenses" element={<ProtectedRoute><ExpensesList/></ProtectedRoute>} />
          <Route path="/employees" element={<ProtectedRoute><EmployeesList/></ProtectedRoute>} />
          <Route path="/clients" element={<ProtectedRoute><ClientsList/></ProtectedRoute>} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </main>
    </div>
  )
}
