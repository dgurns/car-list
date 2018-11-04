import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, createTestCarList } from '../testUtils';
import CarList from '../components/CarList';

describe('render function', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CarList />);
  });
  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-car-list');
    expect(component.length).toBe(1);
  });
  it('renders pickup/return legend', () => {
    const component = findByTestAttr(wrapper, 'car-list-legend');
    expect(component.length).toBe(1);
    expect(component.text()).toContain('Pickup');
    expect(component.text()).toContain('Return');
  });
});

describe('displays correct data', () => {
  let wrapper;
  let carList;
  beforeEach(() => {
    wrapper = mount(<CarList />);
    carList = createTestCarList();
  });
  it('renders the correct number of cars', () => {
    const carListItems = findByTestAttr(wrapper, 'car-list-item');
    expect(carListItems.length).toEqual(carList.length);
  });
  it('renders car images', () => {
    const carImages = findByTestAttr(wrapper, 'car-image');
    expect(carImages.length).toEqual(carList.length);
  });
  it('orders cars by price from low to high', () => {
    const carPrices = findByTestAttr(wrapper, 'car-price');
    const firstPrice = parseInt(carPrices.first().text());
    const lastPrice = parseInt(carPrices.last().text());
    expect(firstPrice).toBeLessThan(lastPrice);
  });
});
