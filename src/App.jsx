import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} >
        </Route>
      </Routes>
    </div>
  )
}

export default App
