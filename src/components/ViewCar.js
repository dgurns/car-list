import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Car from './Car';

export default class ViewCar extends Component {
  componentDidMount() {
    // Eventually should implement a <ScrollToTop> component to wrap entire app
    window.scrollTo(0, 0);
  }

  render() {
    const { car } = this.props.location.state;
    return (
      <div className="view-car">
        <Link to="/">Back to Car List</Link>
        <div className="view-car__car">
          <Car
            expandedView
            vendor={car['Vendor']}
            vehicle={car['Vehicle']}
            status={car['@Status']}
            totalCharge={car['TotalCharge']}
          />
        </div>
      </div>
    );
  }
}
