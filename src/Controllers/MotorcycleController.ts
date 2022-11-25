import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

const msgInvalidId = 'Invalid mongo id';
const msgMotorcycleNotFound = 'Motorcycle not found';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motor: IMotorcycle = {
      model: this.req.body.model,
      color: this.req.body.color,
      year: this.req.body.year,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotor = await this.service.insertOne(motor);
      return this.res.status(201).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }
  
  public async getAll() {
    try {
      const motors = await this.service.find();
      return this.res.status(200).json(motors);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: msgInvalidId });
      } 

      const motorcycle = await this.service.findOne(id);
      
      if (!motorcycle) {
        return this.res.status(404).json({ message: msgMotorcycleNotFound });
      }
      
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateByIdAndMotor() {
    const { id } = this.req.params;
    const motor = this.req.body;

    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: msgInvalidId });
      } 

      const updatedMotor = await this.service.updateOne(id, motor);
      
      if (!updatedMotor) {
        return this.res.status(404).json({ message: msgMotorcycleNotFound });
      }
      
      return this.res.status(200).json(updatedMotor);
    } catch (error) {
      this.next(error);
    }
  }

  // public async deleteById() {
  //   const { id } = this.req.params;

  //   try {
  //     if (!isValidObjectId(id)) {
  //       return this.res.status(422).json({ message: msgInvalidId });
  //     } 

  //     const theCar = await this.service.findOne(id);
      
  //     if (!theCar) {
  //       return this.res.status(404).json({ message: msgMotorcycleNotFound });
  //     }
      
  //     await this.service.destroy(id);

  //     return this.res.status(200).json({});
  //   } catch (error) {
  //     this.next(error);
  //   }
  // }
}
  
export default MotorcycleController;