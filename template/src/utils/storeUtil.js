export function createReducer(handlers, initialState) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type))
      return handlers[action.type](state, action);
    else return state;
  };
}
