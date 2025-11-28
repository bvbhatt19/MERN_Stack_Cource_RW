import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard(){
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">
      <Link to="/expenses" className="p-4 bg-white rounded shadow">Expenses</Link>
      <Link to="/employees" className="p-4 bg-white rounded shadow">Employees</Link>
      <Link to="/clients" className="p-4 bg-white rounded shadow">Clients</Link>
    </div>
  )
}
