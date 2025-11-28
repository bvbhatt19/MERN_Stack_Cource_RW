import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, addByAmount } from './features/counterSlice.js'

export default function App() {
  const value = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState('')

  const addAmount = () => {
    dispatch(addByAmount(amount))
    setAmount('')
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Value: {value}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button onClick={addAmount}>Add Amount</button>
      </div>
    </div>
  )
}
