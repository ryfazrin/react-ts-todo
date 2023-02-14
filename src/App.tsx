import React, { ChangeEvent, useState } from 'react'
import './App.css'
import { ITask } from './interfaces'

const App: React.FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadLine] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == 'task') {
      setTask(event.target.value)
    } else {
      setDeadLine(Number(event.target.value))
    }
  }

  const addTask = () => {
    const newTask = {
      taskName: task,
      deadLine: deadline
    }
    setTodo([... todo, newTask])
    setTask('')
    setDeadLine(0)
  }
  
  return (
    <div className='App'>
      <div className="header">
        <div className="inputContainer">
          <input type="text" value={task} onChange={handleChange} name="task" placeholder="Add a task" />
          <input type="number" value={deadline} onChange={handleChange} name="deadline" placeholder="Set a deadline(in days)" />
        </div>
        <button onClick={addTask}>Add</button>
      </div>
      <div className="todoList"></div>
    </div>
  )
}

export default App
