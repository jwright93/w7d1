import React from 'react';
import uniqueId from './util.js';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.uniqueId = uniqueId;
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  clickHandler(e) {
    e.preventDefault();
    let newObj = {
      id: uniqueId(),
      title: this.state.title
    };
    console.log(newObj);
    this.props.receiveTodo(newObj);
    this.setState({title: ''});
  }

  render() {
    return (
      <form onSubmit={this.clickHandler}>
        <input onChange={this.linkState('title')} value={this.state.title} ></input>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
