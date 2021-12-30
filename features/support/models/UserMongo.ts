/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Document, ObjectId } from 'mongodb';

export class UserMongo implements Document {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public _id?: ObjectId,
  ) {}
}
