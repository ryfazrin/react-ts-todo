import React, { useState } from 'react'
import './App.css'

const App: React.FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadLine] = useState<number>(0)
  
  return (
    <div className='App'>
      <div className="header">
        <div className="inputContainer">
          <input type="text" value={task} name="task" placeholder="Add a task" />
          <input type="number" value={deadline} name="deadline" placeholder="Set a deadline(in days)" />
        </div>
        <button>Add</button>
      </div>
      <div className="todoList"></div>
    </div>
  )
}

export default App
