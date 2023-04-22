
import * as Joi from "joi";
import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import { locationSchema } from "./locationSchema";
import { contactInfoSchema } from "./contactInfoSchema";
import IUser from "../models/common/IUser";

export const userSchema: Joi.ObjectSchema<any> = Joi.object({
    firstName: Joi.string().min(1).max(100).required(),
    lastName: Joi.string().min(1).max(100).required(),
    title: Joi.string().min(1).max(100).required(),
    gender: Joi.string().min(1).max(100).required(),
    largePicture: Joi.string().min(1).max(100).required(),
    thumbnailPicture: Joi.string().min(1).max(100).required(),
    username: Joi.string().min(1).max(100).required(),
    birthDate: Joi.date().required(),
    age: Joi.number().required(),
    location:locationSchema,
    contactInfo:contactInfoSchema
   
  }).required();

  export interface UserRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: IUser;
  }
  