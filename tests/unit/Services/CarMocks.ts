const cars = [
  {
    id: '637bf0f306eb45228312c8c1',
    model: 'Polo',
    color: 'Blue',
    year: 2014,
    status: true,
    buyValue: 44.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '637bf00506eb45228312c8bf',
    model: 'Marea',
    color: 'Black',
    year: 2002,
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '637bf15706eb45228312c8c3',
    model: 'Veloste',
    color: 'Silver',
    year: 2013,
    status: true,
    buyValue: 65.92,
    doorsQty: 3,
    seatsQty: 5,
  },
];

const carWithoutId = {
  model: 'Polo',
  color: 'Blue',
  year: 2014,
  status: true,
  buyValue: 44.99,
  doorsQty: 4,
  seatsQty: 5,
};

const resultCarWitId = {
  id: '637bf0f306eb45228312c8c1',
  model: 'Polo',
  color: 'Blue',
  year: 2014,
  status: true,
  buyValue: 44.99,
  doorsQty: 4,
  seatsQty: 5,
};

const getCarById = {
  id: '637bf15706eb45228312c8c3',
  model: 'Veloste',
  color: 'Silver',
  year: 2013,
  status: true,
  buyValue: 65.92,
  doorsQty: 3,
  seatsQty: 5,
};

export { cars, carWithoutId, resultCarWitId, getCarById };