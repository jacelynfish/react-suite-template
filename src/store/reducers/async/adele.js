import { createReducer } from '@utils/storeUtil';

function addItem(data, { item }) {
  return data.concat(item);
}
function delItem(data, { idx }) {
  return data.filter((item, i) => i != idx);
}
const adeleReducer = {
  'adele/addItem': addItem,
  'adele/delItem': delItem
};

export default createReducer(adeleReducer, [1, 8, 5]);
