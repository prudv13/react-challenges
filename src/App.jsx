import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Challenge1 from './components/Challenge-1/Challenge1'
import Challenge2 from './components/Challenge-2/Challenge2'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/challenge1" element={<Challenge1 />} />
        <Route path="/challenge2" element={<Challenge2 />} />
      </Routes>
    </div>
  )
}

export default App
