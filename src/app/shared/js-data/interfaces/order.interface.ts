import { Record } from "js-data";
import { ITransaction } from "./transaction.interface";
import { IGroup } from "./group.interface";

export interface IOrder extends Record {
  id: string|number
  transactions: ITransaction[]
  group_id?: string
  group?: IGroup
}
