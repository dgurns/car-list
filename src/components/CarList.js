import React, { Component } from 'react';
import moment from 'moment';

import data from '../data/index.json';
import Car from './Car';

class CarList extends Component {
  state = {
    carList: []
  };

  componentDidMount() {
    this.loadCarList();
  }

  loadCarList = () => {
    const { VehVendorAvails } = data.VehAvailRSCore;
    const carList = [];
    // Add Vendor field to each car in array
    VehVendorAvails.forEach(vendorAvail => {
      const { Vendor, VehAvails } = vendorAvail;
      const vendorCars = VehAvails.map(vehAvail => {
        return { ...vehAvail, Vendor };
      });
      carList.push(...vendorCars);
    });
    // Sort carList by price
    carList.sort((carA, carB) => {
      const carAPrice = parseFloat(
        carA['TotalCharge']['@EstimatedTotalAmount']
      );
      const carBPrice = parseFloat(
        carB['TotalCharge']['@EstimatedTotalAmount']
      );
      if (carAPrice < carBPrice) {
        return -1;
      } else if (carAPrice > carBPrice) {
        return 1;
      }
      return 0;
    });
    this.setState({ carList });
  };

  formatDateTime = dateTime => {
    return moment(dateTime).format('MMM Do YYYY, LT');
  };

  renderCarList = () => {
    return this.state.carList.map((car, index) => (
      <div
        className="car-list__list-item"
        key={index}
        onClick={() => this.props.history.push('/view-car', { car })}
        data-test="car-list-item"
      >
        <Car
          vendor={car['Vendor']}
          vehicle={car['Vehicle']}
          status={car['@Status']}
          totalCharge={car['TotalCharge']}
        />
      </div>
    ));
  };

  render() {
    const { VehRentalCore } = data.VehAvailRSCore;
    const { PickUpLocation, ReturnLocation } = VehRentalCore;
    return (
      <div className="car-list" data-test="component-car-list">
        <h1>Choose a Car</h1>
        <div className="car-list__legend" data-test="car-list-legend">
          <div>
            <b>Pickup:</b>{' '}
            {this.formatDateTime(VehRentalCore['@PickUpDateTime'])} at{' '}
            {PickUpLocation['@Name']}
          </div>
          <div>
            <b>Return:</b>{' '}
            {this.formatDateTime(VehRentalCore['@ReturnDateTime'])} at{' '}
            {ReturnLocation['@Name']}
          </div>
        </div>
        <div className="car-list__list">{this.renderCarList()}</div>
      </div>
    );
  }
}

export default CarList;
