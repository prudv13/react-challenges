import React, { useState } from 'react'
import { useGeolocation } from './useGeolocation';

const Geolocate = () => {

  const {isLoading, position: {lat, lng}, error, getPosition} = useGeolocation();

  const [countClicks, setCountClicks] = useState(0);

  function handleClick(){
    setCountClicks(count => count+1);
    getPosition();
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className='btn btn-outline-dark mb-4'
      >
      Get my position
      </button>

      <div className="form-control d-flex flex-column p-4 gap-3">
        <h4 className="m-auto">GPS LOCATION</h4>
        { isLoading && <p>Loading position...</p> }
        {error && <p>{error}</p>}
        {!isLoading && !error && lat && lng && (
          <a
            className='form-control my-auto p-3 btn btn-dark d-flex flex-column'
            target='_blank'
            rel='noreferrer'
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            <span>latitude: {lat}</span>
            <span>longitude: {lng}</span>
          </a>
          )}
        <p>You requested position {countClicks} times</p>
      </div>

      
    </div>
  )
}

export default Geolocate;