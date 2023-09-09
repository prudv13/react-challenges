import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
        <div className='mb-4 p-3 d-flex flex-column gap-3 align-items-center home'>
            <h3>React Challenges</h3>
            <div className='d-flex flex-wrap gap-3'>
                <Link to="button-toggle"><button className='btn btn-dark'>Button Toggle</button></Link>
                <Link to="simple-counter"><button className='btn btn-dark'>Simple Counter</button></Link>
                <Link to="phonebook"><button className='btn btn-dark'>Phone Book</button></Link>
                <Link to="tictactoe"><button className='btn btn-dark'>Tic-Tac-Toe</button></Link>
            </div>
        </div>
        <div className='mx-4'>
            <Outlet />
        </div>
    </Fragment>
  )
}

export default Home;