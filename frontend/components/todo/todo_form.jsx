import React from 'react';
import uniqueId from './util.js';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
    this.clickAdd = this.clickAdd.bind(this);
    this.clickRemove = this.clickRemove.bind(this);
    this.uniqueId = uniqueId;
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  clickAdd(e) {
    e.preventDefault();
    let newObj = {
      id: uniqueId(),
      title: this.state.title
    };
    console.log(newObj);
    this.props.receiveTodo(newObj);
    this.setState({title: ''});
  }

  clickRemove(e) {
    e.preventDefault();
    this.props.removeTodo({id: this.state.title});
    this.setState({title: ''});
  }

  render() {
    return (
      <form >
        <input onChange={this.linkState('title')} value={this.state.title} ></input>
        <button onClick={this.clickAdd}>Add Todo</button>
        <button onClick={this.clickRemove}>Delete Todo</button>
      </form>
    );
  }
}

export default TodoForm;
