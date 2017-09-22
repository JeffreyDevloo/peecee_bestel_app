import { Record } from "js-data";
import { IOrder } from "./order.interface";

export interface IGroup extends Record {
  id: string|number
  name: string
  orders?: IOrder[]
}
