import React from 'react';
import { connect } from 'react-redux';
import Taylor from '@components/Taylor';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Taylor />;
  }
}

export default App;
