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
                <Link to="progressbar"><button className='btn btn-dark'>Progress Bar</button></Link>
                <Link to="pagination"><button className='btn btn-dark'>Pagination</button></Link>
                <Link to="modal"><button className='btn btn-dark'>Modal</button></Link>
                <Link to="dropdown"><button className='btn btn-dark'>Drop Down</button></Link>
                <Link to="comments"><button className='btn btn-dark'>Comments</button></Link>
                <Link to="accordion"><button className='btn btn-dark'>Accordion</button></Link>
                <Link to="disabledbutton"><button className='btn btn-dark'>Disabled Button</button></Link>
            </div>
        </div>
        <div className='mx-4'>
            <Outlet />
        </div>
    </Fragment>
  )
}

export default Home;