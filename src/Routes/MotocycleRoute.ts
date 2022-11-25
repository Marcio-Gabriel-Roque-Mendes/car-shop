import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorRoutes = Router();
const motorID = '/motorcycles/:id';

motorRoutes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

motorRoutes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);
  
motorRoutes.get(
  motorID,
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

motorRoutes.put(
  motorID,
  (req, res, next) => new MotorcycleController(req, res, next).updateByIdAndMotor(),
);

// motorRoutes.delete(
//   motorID,
//   (req, res, next) => new MotorcycleController(req, res, next).deleteById(),
// );
export default motorRoutes;