export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos   //deconstruction todos: todos
});

export const receiveTodo = (todo) => ({
  junk: console.log("asdf"),
  type: RECEIVE_TODO,
  todo    //deconstruction todo: todo
});
