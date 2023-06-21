import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import axios from 'axios';
import { baseURL } from './utils/constant';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateID,setUpdateID]=useState(null)

  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      });
  }, [updateUI]);

  const addTask = () => {
    axios.post(`${baseURL}/create`, { task: input })
      .then((res) => {
        console.log(res.data);
        setInput('')
        setUpdateUI((prevState)=>!prevState)
      });
  };

  const updateMode=(id,text)=>{
    console.log(text,id)
    setInput(text)
    setUpdateID(id)
  }

  const updateTask=()=>{
    axios.put(`${baseURL}/update/${updateID}`,{task:input})
    .then((res)=>{
      console.log(res.data);
      setInput('')
      setUpdateID(null)
      setUpdateUI((prevState)=>!prevState)
    })
  }
  return (
    <main>
      <h1 className='title'>CRUD Operations</h1>

      <div className="input_holder">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
       {
       updateID ? <button type='submit' onClick={updateTask}> Update Task</button> :
       <button type='submit' onClick={addTask}> Add Task</button>
       }
      </div>
      <ul>
        {tasks.map((task, index) => (
          <List index={index} key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode} />
        ))}
      </ul>
    </main>
  );
}

export default App;
