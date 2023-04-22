
import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import ILocation from "../models/common/ILocation";

export const locationSchema: Joi.ObjectSchema<any> = Joi.object({
    country: Joi.string().min(1).max(100).required(),
    state: Joi.string().min(1).max(100).required(),
    city: Joi.string().min(1).max(100).required(),
    street: Joi.string().min(1).max(100).required(),
    streetNumber: Joi.number().required(),
  }).required();

  export interface LocationRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: ILocation;
  }