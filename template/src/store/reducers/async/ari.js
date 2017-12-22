import { createReducer } from '@utils/storeUtil';

function addItem(data, { item }) {
  return data.concat(item);
}
function delItem(data, { idx }) {
  return data.filter((item, i) => i != idx);
}
const ariReducer = {
  'ari/addItem': addItem,
  'ari/delItem': delItem
};

export default createReducer(ariReducer, [5, 8, 9, 952, 1]);
