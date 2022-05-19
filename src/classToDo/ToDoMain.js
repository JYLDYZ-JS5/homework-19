import ToDoItem from './ToDoItem'
import ToDoList from './ToDoList'
import React from 'react'
import './ToDoStyle.css'
class MainToDo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: [],
    }
  }
  addTask(task) {
    this.setState(prevState =>({
      newTask:[...prevState.newTask, { task: task, id: Math.random().toString() }]
    }))
  }
  render() {
    return (
      <div className='container'>
        <ToDoList onAddTask={this.addTask.bind(this)} />
        <ToDoItem tasks={this.state.newTask} />
      </div>
    )
  }
}
export default MainToDo
