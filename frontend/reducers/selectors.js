const allTodos = (state) => {
  return Object.keys(state.todos).map((todo) => {
    return state.todos[todo];
  });
};

export default allTodos;
