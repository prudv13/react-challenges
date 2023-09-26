import React from 'react'
import challenges from '../utils/data';

const Home = () => {
  return (
    <main>
    {
      challenges.map(challenge => (
        <div className="box" key={challenge.id}>
          <div className="info">
            <h3 className="info-title">{challenge.title} - {challenge.id}</h3>
            <h5 className="info-subtitle">{challenge.subTitle}</h5>
            <p className="info-description">
              {challenge.description}
            </p>
          </div>
        </div>
      ))
    }
    </main>
  )
}

export default Home;