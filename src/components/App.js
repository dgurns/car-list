import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CarList from './CarList';
import ViewCar from './ViewCar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CarList} />
          <Route path="/view-car" component={ViewCar} />
        </div>
      </Router>
    );
  }
}
