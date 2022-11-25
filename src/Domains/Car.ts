import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  protected model: string;
  protected color: string;
  protected year: number;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    car: ICar,
  ) {
    this.id = car.id;
    this.model = car.model;
    this.color = car.color;
    this.year = car.year;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
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
  
  public setDoorsQty(status: number) {
    this.doorsQty = status;
  }
  
  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty() {
    return this.seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}
  
export default Car;