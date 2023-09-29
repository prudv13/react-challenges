import React, { useState } from 'react'
import challenges from '../../../utils/data';
import Challenge1Styles from './challenge1.module.css';

const Challenge1 = () => {

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  return (
    <div>
      <div className={Challenge1Styles.challenge1Container}>
        <h1>{challenges[0].title} - 1</h1>
        <h3>{challenges[0].subTitle}</h3>
        <p>{challenges[0].description}</p>
      </div>

      <div className={Challenge1Styles.challenge1}>
        <div className='d-flex justify-content-center'>
          <button onClick={handleToggle} className='btn btn-outline-dark'>
          {!toggle ? 'show' : 'hide'}
          </button>
        </div>
        <p className='form-control text-center'>
          {toggle ? 'Showing Text Content' : "------"}
        </p>
      </div>
    </div>
  )
}

export default Challenge1;