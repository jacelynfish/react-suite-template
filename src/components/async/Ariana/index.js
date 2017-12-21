import reducers from '@reducers/async/ari';

export default [
  {
    path: '/ari',
    view: 'Ariana/view.js',
    reducers: {
      ari: reducers
    }
  }
];
