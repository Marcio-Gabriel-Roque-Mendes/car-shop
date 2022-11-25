import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotocycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motor: IMotorcycle | null): Motorcycle | null {
    if (motor) {
      return new Motorcycle(
        motor,
      );
    }
    return null;
  }

  public async insertOne(motor: IMotorcycle) {
    // Criar instância da Model de Motorcycle usando Mongoose
    const motorcycleODM = new MotorcycleODM();
    // Inserir os dados no banco
    const newMotor = await motorcycleODM.create(motor);
    // Retornar os dados com o id
    return this.createMotorcycleDomain(newMotor);
  }

  public async find() {
    const motorcycleODM = new MotorcycleODM();
    const motors = await motorcycleODM.getAll();

    const motorArray = motors.map((motor: IMotorcycle) => this.createMotorcycleDomain(motor));
    return motorArray;
  }

  public async findOne(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.getById(id);
    return this.createMotorcycleDomain(motorcycle);
  }

  public async updateOne(id: string, motor: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    // console.log(id, motor);
    const updatingMotor = await motorcycleODM.updateByIdAndVehicle(id, motor); // Essa função vem direto da AbstractODM
    return this.createMotorcycleDomain(updatingMotor);
  }

  public async destroy(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.deleteById(id);
    return this.createMotorcycleDomain(motorcycle);
  }
}

export default MotorcycleService;