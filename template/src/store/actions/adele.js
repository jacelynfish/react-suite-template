export default {
  addItem: item => {
    return {
      type: 'adele/addItem',
      item
    };
  },
  delItem: idx => {
    return {
      type: 'adele/delItem',
      idx
    };
  }
};
