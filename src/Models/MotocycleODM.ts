// src/Models/MotorcycleODM.ts

import {
  Schema,
  isValidObjectId,
} from 'mongoose';

import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }
  
  //   public async create(motor: IMotorcycle): Promise<IMotorcycle> {
  //     return this.model.create({ ...motor });
  //   } ESSA FUNCÃO AGORA VEM DE AbstractODM.ts
  
  public async getAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }
  
  public async getById(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId) throw new Error('Invalid mongo id');
    return this.model.findById(id);
  }
  
  //   public async updateByIdAndMotor(id: string, motor: IMotorcycle): Promise<IMotorcycle | null> {
  //     return this.model.findByIdAndUpdate(
  //       id,
  //       motor,
  //       { new: true },
  //     );
  //   } ESSA FUNCÃO AGORA VEM DE AbstractODM.ts
}
  
export default MotorcycleODM;
