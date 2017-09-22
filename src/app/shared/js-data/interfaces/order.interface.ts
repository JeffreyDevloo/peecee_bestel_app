import { Record} from "js-data";

export interface IOrder extends Record {
  id: string|number
  name: string
  beverage_ids: string[]
  group_ids?: string[]
}
