import {REMOVE_TODO, RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      for(let i in action.todos) {
        newState[i] = action.todos[i];
      }
      return newState;
    case RECEIVE_TODO:
      const entryId = action.todo.id;
      let newEntry = {};
      newEntry[entryId] = action.todo;
      return Object.assign({}, state, newEntry);
    case REMOVE_TODO:
      newState = state;
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
