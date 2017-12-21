export default {
  addItem: item => {
    return {
      type: 'ari/addItem',
      item
    };
  },
  delItem: idx => {
    return {
      type: 'ari/delItem',
      idx
    };
  }
};
