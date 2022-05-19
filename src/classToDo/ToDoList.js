import React from 'react'
import './ToDoStyle.css'

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
    }
  }
  inputValue(e) {
    this.setState({ task: e.target.value })
  }
  submitHandler(event) {
    event.preventDefault()
    this.props.onAddTask(this.state.task)
    this.setState({ task: '' })
  }

  render() {
    return (
      
        <form onSubmit={this.submitHandler.bind(this)} className='formDiv'>
            <input
              type="text"
              placeholder="type your to do "
              onChange={this.inputValue.bind(this)}
              value={this.state.task}
              className="input"
            />
            <button type="submit" id='btnOk'>OK</button>
        </form>
    )
  }
}
export default ToDoList
