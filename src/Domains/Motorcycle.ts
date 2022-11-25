import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  protected model: string;
  protected color: string;
  protected year: number;
  protected status: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(
    motorcycle: IMotorcycle,
  ) {
    this.id = motorcycle.id;
    this.model = motorcycle.model;
    this.color = motorcycle.color;
    this.year = motorcycle.year;
    this.status = motorcycle.status || false;
    this.buyValue = motorcycle.buyValue;
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
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

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }
  
  public setCategory(category: 'Street' | 'Custom' | 'Trail') {
    this.category = category;
  }
  
  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}
  
export default Motorcycle;