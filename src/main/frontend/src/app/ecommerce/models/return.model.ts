import {User} from "./user.model";
import {ReturnProduct} from "./return-product.model";
import {Address} from "./address.model";

export class ReturnS{
  returnProducts: ReturnProduct[];
  user: User;
  address: Address;
  amount: number;
  orderReference: string;
  status: string;
  reference: string;

  constructor(returnProducts: ReturnProduct[], user: User, address: Address, amount: number, orderReference: string) {
    this.returnProducts = returnProducts;
    this.user = user;
    this.address = address;
    this.amount = amount;
    this.orderReference = orderReference;
  }
}
