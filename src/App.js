import React, { Component } from 'react';
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';



class App extends Component {
  
  // handleAddTodo(todo){
  //   this.setState({todos: [...this.state.todos, todo]})
  // }
  // 
  render() {
    return (
        <div>
          {/* <TodoInput onAddTodo={this.handleAddTodo}/> */}
          <Todo/>
        </div>
    );
  }
}

export default App;
