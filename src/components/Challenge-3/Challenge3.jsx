import React, { useState } from 'react'
import challenges from '../../../utils/data';
import Challenge3Styles from './challenge3.module.css';
import { AiFillDelete } from 'react-icons/ai';
import { v4 as uuid } from 'uuid';

const Challenge3 = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    setTodoList([...todoList, {
      id: uuid(),
      title: inputValue,
    }])
    setInputValue('');
  };

  const handleDeleteItem = (id) => {
    const updatedTodoList = todoList.filter(item => item.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <div className={Challenge3Styles.challenge3Container}>
        <h1>{challenges[2].title} - 3</h1>
        <h3>{challenges[2].subTitle}</h3>
        <p>{challenges[2].description}</p>
      </div>

      <div className={Challenge3Styles.challenge3}>
        <div className="d-flex justify-content-center p-3">
          <h1>Todo App</h1>
        </div>
        <div className="d-flex flex-column justify-content-center gap-3">

          <div className="input-group w-50 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="enter the item name"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <button className="btn btn-dark" onClick={handleAddItem}>
              ADD
            </button>
          </div>

          <h2 className='mt-3 fs-2'>Todo List:</h2>
          <div>
            <ul className='d-flex gap-2 flex-wrap'>
            {
              todoList.map(item => (
                <li 
                  className='w-auto form-control d-flex justify-content-between align-items-center' 
                  key={item.id}
                  style={{background: "#6bd5ff", border: "none"}}
                >
                  <span className='mx-3'>{item.title}</span>
                  <button className='btn' onClick={() => handleDeleteItem(item.id)}>
                    <AiFillDelete size={20} />
                  </button>
                </li>
              ))
            }
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Challenge3;