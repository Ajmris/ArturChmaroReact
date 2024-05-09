import React, { Component } from 'react';

class ToDoList extends Component{
  state={
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft=event=>{
    this.setState({draft: event.target.value})
  }
  addToDo=()=>{
    const {tasks, draft}=this.state
    const list=tasks
    list.push(draft)
    this.setState({tasks: list})
  }
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        {this.props.tasks.map(task=> <div><p>{task}</p></div>)}
        <input type='text' onChange={this.updateDraft} />
        <button onClick={this.addToDo}>Add</button>
      </div>
    )
  }
}

class App extends Component{
  myTasks=[
    'Record a ReactJS video',
    'Go for a walk'
  ]
  render(){
    return(
      <div>
        <ToDoList title='My stuff' tasks={this.myTasks} />
      </div>
    );
  }
}

export default App;