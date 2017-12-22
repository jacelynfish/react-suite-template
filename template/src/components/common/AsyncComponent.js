import React from 'react';

class AsyncComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: ''
    };
  }

  componentDidMount() {
    this.load(this.props);
  }

  load(props) {
    props.load().then(mod => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    let Mod = this.state.mod;
    return Mod ? <Mod {...this.props} /> : null;
  }
}

export default AsyncComponent;
