import data from './data/index.json';

export function findByTestAttr(wrapper, val) {
  return wrapper.find(`[data-test="${val}"]`);
}

export function createTestCarList() {
  const carList = [];
  data.VehAvailRSCore.VehVendorAvails.forEach(vendorAvail => {
    const { VehAvails } = vendorAvail;
    carList.push(...VehAvails);
  });
  carList.sort((carA, carB) => {
    const carAPrice = parseFloat(carA['TotalCharge']['@EstimatedTotalAmount']);
    const carBPrice = parseFloat(carB['TotalCharge']['@EstimatedTotalAmount']);
    if (carAPrice < carBPrice) {
      return -1;
    } else if (carAPrice > carBPrice) {
      return 1;
    }
    return 0;
  });
  return carList;
}
