import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const style = {
    li: `flex justify-between backdrop-blur-sm bg-white/5 p-3 my-2 capitalize rounded-md`,
    row: `flex`,
    text: `ml-3 cursor-pointer`,
    textComplete: `ml-3 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}

const Todo = ( {todo, toggleComplete, deleteTodo} ) => {
  return (
    <div>
      <li className={style.li}>
        <div className={style.row}>
            <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''}/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ?  style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button onClick={() => deleteTodo(todo.id)} >{<FaRegTrashAlt />}</button>
      </li>
    </div>
  )
}

export default Todo
