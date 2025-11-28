import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const { register: reg, handleSubmit } = useForm()
  const { register: doRegister } = useAuth()
  const nav = useNavigate()

  const onSubmit = async (data) => {
    try {
      await doRegister(data.email, data.password)
      nav('/')
    } catch(e){
      alert('Register failed: '+e.message)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input {...reg('email')} placeholder="Email" className="w-full border p-2 rounded" />
        <input {...reg('password')} type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">Create account</button>
      </form>
    </div>
  )
}
