export default {
  addItem: item => {
    return {
      type: 'taylor/addItem',
      item
    };
  },
  delItem: idx => {
    return {
      type: 'taylor/delItem',
      idx
    };
  }
};
