import React from 'react'
import { useForm } from 'react-hook-form'
import { addExpense, updateExpense } from '../../services/expensesService'

export default function ExpenseForm({ initial, onDone }){
  const { register, handleSubmit, reset } = useForm({ defaultValues: initial || { date: '', category: '', amount: '' } })

  const onSubmit = async (data) => {
    // convert amount
    data.amount = parseFloat(data.amount || 0)
    if(initial && initial.id){
      await updateExpense(initial.id, data)
    } else {
      await addExpense({ ...data })
    }
    reset()
    if(onDone) onDone()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 bg-white p-4 rounded shadow">
      <div className="grid md:grid-cols-3 gap-3">
        <input {...register('date')} type="date" className="border p-2 rounded" />
        <input {...register('category')} placeholder="Category" className="border p-2 rounded" />
        <input {...register('amount')} placeholder="Amount" className="border p-2 rounded" />
      </div>
      <div className="mt-3">
        <textarea {...register('description')} placeholder="Description" className="w-full border p-2 rounded" />
      </div>
      <div className="mt-3 flex gap-2">
        <button type="submit" className="px-3 py-1 bg-indigo-600 text-white rounded">Save</button>
        <button type="button" onClick={() => { reset(); if(onDone) onDone() }} className="px-3 py-1 border rounded">Cancel</button>
      </div>
    </form>
  )
}
