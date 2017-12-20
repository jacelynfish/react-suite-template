import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '@actions/taylor';

class Taylor extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(idx) {
    this.props.actions.delItem(idx);
  }
  render() {
    const { data } = this.props;

    return (
      <ul id="taylor">
        {data.map((item, idx) => {
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
  return { data: state.taylor };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Taylor);
