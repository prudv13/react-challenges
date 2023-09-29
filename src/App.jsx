import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Challenge1 from './components/Challenge-1/Challenge1'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/challenge1" element={<Challenge1 />} />
      </Routes>
    </div>
  )
}

export default App
