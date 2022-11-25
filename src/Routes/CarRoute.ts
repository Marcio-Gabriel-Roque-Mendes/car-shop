import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

carRoutes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAll(),
);
  
carRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

carRoutes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateByIdAndCar(),
);

carRoutes.delete(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).deleteById(),
);
export default carRoutes;