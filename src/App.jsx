import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Challenge1 from './components/Challenge-1/Challenge1'
import Challenge2 from './components/Challenge-2/Challenge2'
import Challenge3 from './components/Challenge-3/Challenge3'
import Challenge4 from './components/Challenge-4/Challenge4'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/challenge1" element={<Challenge1 />} />
        <Route path="/challenge2" element={<Challenge2 />} />
        <Route path="/challenge3" element={<Challenge3 />} />
        <Route path="/challenge4" element={<Challenge4 />} />
      </Routes>
    </div>
  )
}

export default App
