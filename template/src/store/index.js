import { combineReducers, createStore, applyMiddleware } from 'redux';

const _syncReducers = preval`
    const fs = require('fs');
    const path = require('path');
    module.exports = fs.readdirSync(path.resolve(process.cwd(), 'src/store/reducers/sync'))
`;

let syncSubReducers = {};

_syncReducers.forEach(file => {
  let tempfile = file.split('.')[0];
  syncSubReducers[tempfile] = require(`@reducers/sync/${tempfile}`).default;
});

function createReducer(asyncSubReducers) {
  let newRootReducer = Object.assign({}, syncSubReducers, asyncSubReducers);
  return combineReducers(newRootReducer);
}

const initialState = {
  taylor: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  ed: [0]
};

// https://redux.js.org/docs/recipes/reducers/InitializingState.html
const store = createStore(createReducer(), initialState);
store.asyncReducers = {};

export function addAsyncReducers(asyncReducers) {
  Object.assign(store.asyncReducers, asyncReducers);
  store.replaceReducer(createReducer(store.asyncReducers));
}

export function getHotReloadRootReducers() {
  return createReducer(store.asyncReducers);
}

export default store;
