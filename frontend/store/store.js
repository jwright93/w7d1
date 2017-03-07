import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import allTodos from '../reducers/selectors';
import {removeTodo, receiveTodos, receiveTodo} from '../actions/todo_actions';

export const configureStore = () => {
  const store = createStore(rootReducer);
  window.store = store;
  window.selectors = allTodos;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  return store;
};
