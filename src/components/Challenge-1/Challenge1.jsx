import React from 'react'
import challenges from '../../../utils/data';
import Challenge1Styles from './challenge1.module.css';

const Challenge1 = () => {
  return (
    <div>
      <div className={Challenge1Styles.challenge1Container}>
        <h1>{challenges[0].title} - 1</h1>
        <h3>{challenges[0].subTitle}</h3>
        <p>{challenges[0].description}</p>
      </div>
    </div>
  )
}

export default Challenge1;