import { Record} from "js-data";
import { IOrder } from "./order.interface";
import { IBeverage } from "./beverage.interface";

export interface ITransaction extends Record {
  id: string|number
  amount: number
  beverage_id: string| number
  beverage: IBeverage
  order_id: string
  order: IOrder
}
