import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(prev => prev+1);
  }

  function Reset() {
    setCount(0);
  }

  function Decrement() {
    setCount(prev => prev-1);
  }
  
  return (
    <div className='d-flex flex-column gap-4 align-items-center'>
      <h1>Count: {count}</h1>
      <div className='d-flex gap-3'>
        <button className='btn btn-outline-success' onClick={Increment}>Increment</button>
        <button className='btn btn-outline-secondary' onClick={Reset}>Reset</button>
        <button className='btn btn-outline-danger' onClick={Decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter;
