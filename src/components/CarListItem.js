import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CarListItem extends Component {
  render() {
    const { vendor, vehicle, status, totalCharge } = this.props;
    return (
      <div className="car-list-item">
        <div
          className="car-list-item__image"
          style={{ backgroundImage: `url(${vehicle.PictureURL})` }}
        />
        <div className="car-list-item__info">
          <h2>
            {`${vehicle['VehMakeModel']['@Name']} ($${
              totalCharge['@EstimatedTotalAmount']
            })`}
          </h2>
          <h3>{vendor['@Name']}</h3>
        </div>
        <div className="car-list-item__info">
          <span>
            Air Conditioning: {vehicle['@AirConditionInd'] ? 'Yes' : 'No'}
          </span>
          <span>Transmission Type: {vehicle['@TransmissionType']}</span>
          <span>Fuel Type: {vehicle['@FuelType']}</span>
          <span>Drive Type: {vehicle['@DriveType']}</span>
          <span>Passenger Quantity: {vehicle['@PassengerQuantity']}</span>
          <span>Baggage Quantity: {vehicle['@BaggageQuantity']}</span>
          <span>Door Count: {vehicle['@DoorCount']}</span>
          <span>Code: {vehicle['@Code']}</span>
          <span>Code Context: {vehicle['@CodeContext']}</span>
        </div>
      </div>
    );
  }
}

CarListItem.propTypes = {
  vendor: PropTypes.object.isRequired,
  vehicle: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  totalCharge: PropTypes.object.isRequired
};
