const canAddAndRemoveTodos = {
  init: () => ({
    items: []
  }),
  addTodo: (state = {}, todo) => ({
    ...state,
    items: state.items.concat(todo)
  }),
  removeTodo: (state = {}, index) => ({
    ...state,
    items: state.items.filter((item, i) => i !== index)
  })
};

export { canAddAndRemoveTodos };
