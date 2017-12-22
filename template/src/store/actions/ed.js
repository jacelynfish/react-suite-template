export default {
  addItem: item => {
    return {
      type: 'ed/addItem',
      item
    };
  },
  delItem: idx => {
    return {
      type: 'ed/delItem',
      idx
    };
  }
};
