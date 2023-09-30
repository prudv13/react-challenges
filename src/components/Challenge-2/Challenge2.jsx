import React, { useEffect, useState } from 'react'
import challenges from '../../../utils/data';
import Challenge2Styles from './challenge2.module.css';

const Challenge2 = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if(start){
      interval = setInterval(() => {
        setCount(prev => prev+1);
      }, 1000);
    }
    else{
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div>
      <div className={Challenge2Styles.challenge2Container}>
        <h1>{challenges[1].title} - 2</h1>
        <h3>{challenges[1].subTitle}</h3>
        <p>{challenges[1].description}</p>
      </div>

      <div className={Challenge2Styles.challenge2}>
        <div className='d-flex justify-content-center p-3'>
          <h1>Timer : {count} </h1>
        </div>
        <div className='d-flex justify-content-center gap-3'>
          <button 
            className='btn btn-success'
            onClick={() => setStart(true)}
          >start</button>

          <button 
            className='btn btn-dark'
            onClick={() => {setStart(false); setCount(0)}}
          >reset</button>

          <button 
            className='btn btn-danger'
            onClick={() => setStart(false)}
          >stop</button>
        </div>
      </div>
    </div>
  )
}

export default Challenge2;