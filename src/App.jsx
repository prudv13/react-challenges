import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ButtonToggle from './challenges/Button Toggle/ButtonToggle'
import Counter from './challenges/Simple Counter/Counter'
import PhoneBook from './challenges/Phone Book/PhoneBook'
import TicTacToe from './challenges/Tic-Tac-Toe/TicTacToe'

function App() {

  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<Home />} >
          <Route path='button-toggle' element={<ButtonToggle />} />
          <Route path='simple-counter' element={<Counter />} />
          <Route path='phonebook' element={<PhoneBook />} />
          <Route path='tictactoe' element={<TicTacToe />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
