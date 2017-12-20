import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import reducers from './store';
import App from './App';

const store = createStore(reducers);

function _render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}

_render(App);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const nextRootReducer = require('./store').default;
    store.replaceReducer(nextRootReducer);
    _render(App);
  });
}
