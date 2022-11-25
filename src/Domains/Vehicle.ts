import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  protected model: string;
  protected color: string;
  protected year: number;
  protected status: boolean;
  protected buyValue: number;

  constructor(
    vehicle: IVehicle,
  ) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.color = vehicle.color;
    this.year = vehicle.year;
    this.status = vehicle.status || false;
    this.buyValue = vehicle.buyValue;
  }
  
  public setId(id: string) {
    this.id = id;
  }
  
  public getId() {
    return this.id;
  }
  
  public setModel(model: string) {
    this.model = model;
  }
  
  public getModel() {
    return this.model;
  }
  
  public setColor(color: string) {
    this.color = color;
  }
  
  public getColor() {
    return this.color;
  }
  
  public setYear(year: number) {
    this.year = year;
  }
  
  public getYear() {
    return this.year;
  }
  
  public setStatus(status: boolean) {
    this.status = status;
  }
  
  public getStatus() {
    return this.status;
  }

  public setBuyValue() {
    return this.buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }
}
  
export default Vehicle;