import React from 'react';
import { addAsyncReducers } from '@store';
import AsyncComponent from '../components/common/AsyncComponent';

function render(path, reducers) {
  addAsyncReducers(reducers);
  return props => {
    return (
      <AsyncComponent load={() => import('../components/async/' + path)} />
    );
  };
}
const routes = {
  sync: {},
  async: {}
};

let pages = preval`
    const fs = require('fs');
    const path = require('path');
    let sync = fs.readdirSync(path.resolve(process.cwd(), 'src/components/sync'))
    let async = fs.readdirSync(path.resolve(process.cwd(), 'src/components/async'))
    module.exports = {sync, async}
`;

Object.keys(pages).forEach(type => {
  pages[type].forEach(page => {
    let configs = require(`../components/${type}/${page}`).default;
    configs.forEach(config => {
      routes[type][page] = {
        path: config.path
      };

      if (type == 'sync') {
        routes[type][page].component = config.view;
      } else {
        routes[type][page].component = render(config.view, config.reducers);
      }
    });
  });
});

export default routes;
