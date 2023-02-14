import React from 'react'
import './App.css'

const App: React.FC = () => {
  
  return (
    <div className='App'>
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="task" placeholder="Add a task" />
          <input type="number" name="deadline" placeholder="Set a deadline(in days)" />
        </div>
        <button>Add</button>
      </div>
      <div className="todoList"></div>
    </div>
  )
}

export default App
