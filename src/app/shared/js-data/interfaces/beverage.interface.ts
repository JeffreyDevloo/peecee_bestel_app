import { Record} from "js-data";
import { ITransaction } from "./transaction.interface";

export interface IBeverage extends Record {
  id: string|number
  name: string
  price?: number
  transactions?: ITransaction[]
}
