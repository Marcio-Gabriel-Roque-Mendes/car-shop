import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car,
      );
    }
    return null;
  }

  public async insertOne(car: ICar) {
    // Criar instância da Model de Car usando Mongoose
    const carODM = new CarODM();
    // Inserir os dados no banco
    const newCar = await carODM.create(car);
    // Retornar os dados com o id
    return this.createCarDomain(newCar);
  }

  public async find() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();

    const carList = cars.map((car: ICar) => this.createCarDomain(car));
    return carList;
  }

  public async findOne(id: string) {
    const carODM = new CarODM();
    const theCar = await carODM.getById(id);
    return this.createCarDomain(theCar);
  }

  public async updateOne(id: string, car: ICar) {
    const carODM = new CarODM();
    // console.log(id, car);
    const updatingCar = await carODM.updateByIdAndVehicle(id, car); // Essa função vem direto da AbstractODM
    return this.createCarDomain(updatingCar);
  }

  public async destroy(id: string) {
    const carODM = new CarODM();
    const theCar = await carODM.deleteById(id);
    return this.createCarDomain(theCar);
  }
}

export default CarService;