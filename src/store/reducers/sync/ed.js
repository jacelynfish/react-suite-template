import { createReducer } from '@utils/storeUtil';

function addItem(data, { item }) {
  return data.concat(item);
}
function delItem(data, { idx }) {
  return data.filter((item, i) => i != idx);
}
const edReducer = {
  'ed/addItem': addItem,
  'ed/delItem': delItem
};

export default createReducer(edReducer, []);
