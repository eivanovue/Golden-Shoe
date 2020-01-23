export class Delivery {
  id: number;
  name: string;
  days: number;
  price: number;

  constructor(id: number, name: string, days: number, price: number) {
    this.id = id;
    this.name = name;
    this.days = days;
    this.price = price;
  }
}
