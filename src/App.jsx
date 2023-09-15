import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ButtonToggle from './challenges/Button Toggle/ButtonToggle'
import Counter from './challenges/Simple Counter/Counter'
import PhoneBook from './challenges/Phone Book/PhoneBook'
import TicTacToe from './challenges/Tic-Tac-Toe/TicTacToe'
import ProgressBar from './challenges/Progress Bar/ProgressBar'
import Pagination from './challenges/Pagination/Pagination'
import Modal from './challenges/Modal/Modal'
import DropDown from './challenges/Drop Down/DropDown'
import Comments from './challenges/Comment Section/Comments'
import Accordion from './challenges/Accordion/Accordion'
import DisabledButton from './challenges/Disable Button/DisabledButton'
import CurrencyConvert from './challenges/Currency Converter/CurrencyConvert'

function App() {

  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<Home />} >
          <Route path='button-toggle' element={<ButtonToggle />} />
          <Route path='simple-counter' element={<Counter />} />
          <Route path='phonebook' element={<PhoneBook />} />
          <Route path='tictactoe' element={<TicTacToe />} />
          <Route path='progressbar' element={<ProgressBar />} />
          <Route path='currencyconvert' element={<CurrencyConvert />} />
          <Route path='pagination' element={<Pagination />} />
          <Route path='modal' element={<Modal />} />
          <Route path='dropdown' element={<DropDown />} />
          <Route path='comments' element={<Comments />} />
          <Route path='accordion' element={<Accordion />} />
          <Route path='disabledbutton' element={<DisabledButton />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
