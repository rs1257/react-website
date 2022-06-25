import React, { Component, Fragment } from 'react';
import Weather from '../components/Weather.jsx';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Weather />
      </Fragment>
    );
  }
}

export default Home;