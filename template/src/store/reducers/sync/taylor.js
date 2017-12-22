import { createReducer } from '@utils/storeUtil';

function addItem(data, { item }) {
  return data.concat(item);
}
function delItem(data, { idx }) {
  return data.filter((item, i) => i != idx);
}
const taylorReducer = {
  'taylor/addItem': addItem,
  'taylor/delItem': delItem
};

export default createReducer(taylorReducer, []);
