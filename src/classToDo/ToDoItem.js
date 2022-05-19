import React from 'react'
import './ToDoStyle.css'

class ToDoItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul className='ul  formDiv'>
        {this.props.tasks.map(el=><li key={el.id}>{el.task}</li>)}
      </ul>
    )
  }
}
export default ToDoItem
