import React, {useState, useEffect} from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import Todo from './components/Todo';
import {db} from './components/firebase';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore';
import ParticlesComponent from "./components/Particle";
import Cloud from "./components/Cloud";
import Sun from "./components/Sun";

const style = {
  bg: `relative h-screen w-screen overflow-hidden p-4 bg-gradient-to-tr from-[#0bd1ff] via-[#ffa3ff] to-[#ffd342]`,
  container: `backdrop-blur-sm bg-white/30 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 relative z-10`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between p-3`,
  input: `backdrop-blur-sm bg-white/40 p-2 w-full text-xl rounded-md`,
  button: `backdrop-blur-sm bg-white/40 rounded-md p-3 ml-2`,
  count: `text-center p-2 text-gray-800`,
  particles: 'absolute top-0 left-0 w-full h-full z-10'
}

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

//create todo

const createTodo = async (e) => {
  e.preventDefault(e)
  if(input === '') {
    alert('Please Enter a Value')
    return
  }
  await addDoc(collection(db, 'todos'),{
    text: input,
    completed: false,
  })
  setInput('')
}

//read todo from firebase

useEffect(()=>{
  const q = query(collection(db, 'todos'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArr = []
    querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id:doc.id})
    });
    setTodos(todosArr)
  })
  return () => unsubscribe()
}, [])

//update todo in firebase

const toggleComplete = async (todo) => {
  await updateDoc(doc(db, 'todos', todo.id), {
    completed: !todo.completed
  })
}

//delete todo

const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}

  return (
    <div className={style.bg}>
      <ParticlesComponent id="particles" />
      <Sun />
      <Cloud />
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder="Add Todo" />
          <button className={style.button}>< AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          ))}
        </ul>
        {todos.length < 1 ? null : <p className={style.count}>{`You Have ${todos.length} Todos`}</p>}
      </div>
    </div>
  );
}

export default App;
