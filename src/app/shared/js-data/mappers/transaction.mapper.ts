import { transactionSchema } from '../schemas'
import { transactionRelation} from "../relations";

export const transactionMapper = {
  schema: transactionSchema,
  relations: transactionRelation,
  // Function can also be defined here
};
