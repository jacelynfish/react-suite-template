import { combineReducers } from 'redux';

const subReducers = preval`
    const fs = require('fs');
    const path = require('path');
    module.exports = fs.readdirSync(path.resolve(process.cwd(), 'src/store/reducers'))
`;

let reducers = {};

subReducers.forEach(file => {
  let tempfile = file.split('.')[0];
  reducers[tempfile] = require(`@reducers/${tempfile}`).default;
});

export default combineReducers(reducers);
