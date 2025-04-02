import { BaseModel } from "../base.model";

/* Las herencias permiten replicar código y hacerlo más mantenible */
export interface Category extends BaseModel {
  name: string;
}
