export class Car {
  model: string | undefined;
  brand: string | undefined;
  year : number | undefined;
  color:Color | undefined;
  constructor(){
    this.brand = '';
    this.brand = '';
    this.year = 0;
    this.color = undefined;
  }
}
export enum Color{
  RED = 'RED',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  YELLOW = 'YELLOW'
}
