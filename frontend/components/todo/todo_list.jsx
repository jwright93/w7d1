import React from 'react';
import TodoItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let todoItems = this.props.todos.map((todo, i) => {
      return <li key={i}>{todo.title}</li>;
    });
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }
}

export default TodoList;
