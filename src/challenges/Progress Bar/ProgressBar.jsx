import React, { useState } from 'react'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    if(progress < 100){
      setProgress(progress+20);
    }
  }

  const handleButtonReset = () => {
    setProgress(0);
  }

  const getColor = () => {
    if(progress < 40){
      return "#ff0000";
    }
    else if(progress < 70) {
      return "#ffa500";
    }
    else {
      return "#2ecc71";
    }
  }

  return (
    <div className='container'>
      <div className='progress-bar'>

        <div 
          className='progress-bar-fill'
          style={{width: `${progress}%`, backgroundColor: getColor()}}
        >
        </div>
        
      </div>
      <div className='progress-label'>
        <p>{progress}%</p>
      </div>

      <div className='d-flex justify-content-center gap-3'>
        <button onClick={handleButtonClick} className='btn btn-dark'>Progress</button>
        <button onClick={handleButtonReset} className='btn btn-dark'>Reset</button>
      </div>
    </div>
  )
}

export default ProgressBar;