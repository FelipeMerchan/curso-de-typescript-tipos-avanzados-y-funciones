export interface BaseModel {
  /* readonly nos permite evitar la sobre escritura a ciertas variables,
  es decir, protegerlas, con esto solo serán de lectura. */
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}
