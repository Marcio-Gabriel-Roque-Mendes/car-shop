import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

const msgInvalidId = 'Invalid mongo id';
const msgCarNotFound = 'Car not found';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      color: this.req.body.color,
      year: this.req.body.year,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.insertOne(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
  
  public async getAll() {
    try {
      const cars = await this.service.find();
      return this.res.status(200).json(cars);
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

      const theCar = await this.service.findOne(id);
      
      if (!theCar) {
        return this.res.status(404).json({ message: msgCarNotFound });
      }
      
      return this.res.status(200).json(theCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateByIdAndCar() {
    const { id } = this.req.params;
    const car = this.req.body;

    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: msgInvalidId });
      } 

      const updatedCar = await this.service.updateOne(id, car);
      
      if (!updatedCar) {
        return this.res.status(404).json({ message: msgCarNotFound });
      }
      
      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteById() {
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: msgInvalidId });
      } 

      const theCar = await this.service.findOne(id);
      
      if (!theCar) {
        return this.res.status(404).json({ message: msgCarNotFound });
      }
      
      await this.service.destroy(id);

      return this.res.status(200).json({});
    } catch (error) {
      this.next(error);
    }
  }
}
  
export default CarController;