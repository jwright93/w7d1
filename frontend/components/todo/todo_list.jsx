import React from 'react';
import TodoItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let todoItems = this.props.todos.map((todo, i) => {
      return <li key={i}>{todo.title}</li>;
    });
    return (
      <div>
        <ul>
          {todoItems}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} removeTodo={this.props.removeTodo}></TodoForm>
      </div>

    );
  }
}

export default TodoList;
