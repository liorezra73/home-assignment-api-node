import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import IContactInfo from "../models/common/IContactInfo";

export const contactInfoSchema: Joi.ObjectSchema<any> = Joi.object({
    email: Joi.string().email().min(1).max(100).required(),
    phone: Joi.string().min(1).max(20).required(),
  }).required();

  export interface ContactInfoRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: IContactInfo;
  }