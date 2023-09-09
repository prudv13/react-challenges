import React, { useState } from 'react'

const ButtonToggle = () => {
  const [toggle, setToggle] = useState('ON');

  const handleClick = () => {
    toggle === 'ON' ? setToggle('OFF') : setToggle('ON');
  }
  return (
    <div>
      <button className='btn btn-outline-dark' onClick={handleClick}>{toggle}</button>
    </div>
  )
}

export default ButtonToggle;