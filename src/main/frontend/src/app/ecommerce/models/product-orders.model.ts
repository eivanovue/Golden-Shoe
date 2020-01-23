import {ProductOrder} from "./product-order.model";
import {Delivery} from "./delivery.model";
import {Address} from "./address.model";
import {User} from "./user.model";

export class ProductOrders {
  productOrders: ProductOrder[] = [];
  delivery: Delivery = null;
  address: Address = null;
  user: User = null;
}
