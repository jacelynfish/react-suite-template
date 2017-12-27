import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import actionCreators from '@actions/adele';

class Adele extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(idx) {
    this.props.actions.delItem(idx);
  }
  render() {
    const { data } = this.props;

    return (
      <ul id="adele">
        <div>Adele</div>
        {data &&
          data.map((item, idx) => {
            return (
              <li key={idx} onClick={e => this.handleClick(idx)}>
                {item}
              </li>
            );
          })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.adele };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(Adele)));
