import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer>
        <Provider store={this.props.store}>
          <Router>
            <div>
              {Object.keys(routes.sync).map(key => {
                return <Route key={key} {...routes.sync[key]} />;
              })}
              {Object.keys(routes.async).map(key => {
                return <Route key={key} {...routes.async[key]} />;
              })}
            </div>
          </Router>
        </Provider>
      </AppContainer>
    );
  }
}

export default App;
