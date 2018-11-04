import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Car extends Component {
  render() {
    const { expandedView, vendor, vehicle, status, totalCharge } = this.props;
    return (
      <div className={classnames('car', expandedView && 'car--expanded')}>
        <div
          className={classnames(
            'car__image',
            expandedView && 'car__image--expanded'
          )}
          style={{ backgroundImage: `url(${vehicle.PictureURL})` }}
          data-test="car-image"
        />
        <div
          className={classnames(
            'car__info',
            expandedView && 'car__info--expanded'
          )}
        >
          <h2>
            {`${vehicle['VehMakeModel']['@Name']} ($`}
            <span data-test="car-price">
              {totalCharge['@EstimatedTotalAmount']})
            </span>
          </h2>
          <h3>{vendor['@Name']}</h3>
        </div>
        <div
          className={classnames(
            'car__info',
            expandedView && 'car__info--expanded'
          )}
        >
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
          <span>Status: {status}</span>
        </div>
      </div>
    );
  }
}

Car.propTypes = {
  expandedView: PropTypes.bool,
  vendor: PropTypes.object.isRequired,
  vehicle: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  totalCharge: PropTypes.object.isRequired
};

Car.defaultProps = {
  expandedView: false
};
