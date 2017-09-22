import { Record} from "js-data";
import { IOrder } from "./order.interface";
import {IBeverage} from "./beverage.interface";

export interface ITransaction extends Record {
  id: string|number
  amount: number
  beverage_ids: string[]
  beverages: IBeverage[]
  order_id: string
  order: IOrder
}
