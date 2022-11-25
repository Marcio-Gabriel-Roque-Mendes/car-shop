const motoHonda = 'Honda CG 160 Start';

const motors = [
  {
    id: '637bf44406eb45228312c8c8',
    model: motoHonda,
    color: 'black',
    year: 2022,
    status: true,
    buyValue: 15.046,
    category: 'Street',
    engineCapacity: 160,
  },
  {
    id: '637bf53006eb45228312c8ca',
    model: 'Yamaha TTR 230',
    color: 'Orange',
    year: 2021,
    status: true,
    buyValue: 17.396,
    category: 'Trail',
    engineCapacity: 230,
  },
];
  
const motorWithoutId = {
  model: motoHonda,
  color: 'black',
  year: 2022,
  status: true,
  buyValue: 15.046,
  category: 'Street',
  engineCapacity: 160,
};

const resultMotorWitId = {
  id: '637bf44406eb45228312c8c8',
  model: motoHonda,
  color: 'black',
  year: 2022,
  status: true,
  buyValue: 15.046,
  category: 'Street',
  engineCapacity: 160,
};
  
const getMotorById = {
  id: '637bf53006eb45228312c8ca',
  model: 'Yamaha TTR 230',
  color: 'Orange',
  year: 2021,
  status: true,
  buyValue: 17.396,
  category: 'Trail',
  engineCapacity: 230,
};
  
export { motors, motorWithoutId, resultMotorWitId, getMotorById };