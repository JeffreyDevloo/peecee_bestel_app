import { beverageSchema } from '../schemas'
import { beverageRelation} from "../relations";

export const beverageMapper = {
  schema: beverageSchema,
  relations: beverageRelation,
  // Function can also be defined here
};
