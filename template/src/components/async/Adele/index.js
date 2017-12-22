import reducers from '@reducers/async/adele';

export default [
  {
    path: '/adele',
    view: 'Adele/view.js',
    reducers: {
      adele: reducers
    }
  }
];
