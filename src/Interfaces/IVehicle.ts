interface IVehicle {
  id?: string
  model: string;
  color: string;
  year: number;
  status?: boolean | false;
  buyValue: number;
}
      
export default IVehicle;