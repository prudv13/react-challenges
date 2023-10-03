import React, { useState } from 'react'
import challenges from '../../../utils/data';
import Challenge4Styles from './challenge4.module.css';

const Challenge4 = () => {
  const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    if(progress < 100){
      setProgress(progress + 20);
    }
  };

  const handleReset = () => {
    setProgress(0);
  };

  const getColor = () => {
    if(progress <= 20){
      return "#FF6969"
    }
    else if(progress <= 40){
      return "#FF9B50"
    }
    else if(progress <= 60){
      return "#FBD85D"
    }
    else if(progress <= 80){
      return "#A8DF8E"
    }
    else{
      return "#59CE8F";
    }
  }

  return (
    <div>
      <div className={Challenge4Styles.challenge4Container}>
        <h1>{challenges[3].title} - 4</h1>
        <h3>{challenges[3].subTitle}</h3>
        <p>{challenges[3].description}</p>
      </div>

      <div className={Challenge4Styles.challenge4}>
        <div className={Challenge4Styles.progressbar}>
          <div 
            className={Challenge4Styles.progressbarFill} 
            style={{width: `${progress}%`, backgroundColor: getColor()}}
            ></div>
        </div>

        <div className={Challenge4Styles.progressLabel}>{progress}%</div>

        <div className="d-flex justify-content-center gap-3">
          <button onClick={handleProgress} className='btn btn-outline-dark'>progress</button>
          <button onClick={handleReset} className='btn btn-outline-dark'>reset</button>
        </div>
      </div>
    </div>
  );
}

export default Challenge4;