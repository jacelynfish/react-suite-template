import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';

function _render() {
  ReactDOM.render(<App store={store} />, document.getElementById('app'));
}
_render();

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./store').getHotReloadRootReducers;
    store.replaceReducer(nextRootReducer);
    _render();
  });
}
