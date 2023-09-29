import React from 'react'
import challenges from '../utils/data';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
    {
      challenges.map(challenge => (
        <Link to={`challenge${challenge.id}`} className="box" key={challenge.id}>
          <div className="info">
            <h3 className="info-title">{challenge.title} - {challenge.id}</h3>
            <h5 className="info-subtitle">{challenge.subTitle}</h5>
            <p className="info-description">
              {challenge.description}
            </p>
          </div>
        </Link>
      ))
    }
    </main>
  )
}

export default Home;