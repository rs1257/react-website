import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './TitleBar.css';
import Weather from './Weather.jsx';
import NavLink from './NavLink.jsx';
import Home from './../pages/Home.jsx';
import DigitalClock from './DigitalClock';

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class TitleBar extends Component {
  render() {
    return (
      <Router>
        <div className="TitleBar">
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <DigitalClock />
          </ul>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={Weather} />
            <Route exact path="/" render={() => (
              <Redirect to="/home"/>
            )}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default TitleBar;



