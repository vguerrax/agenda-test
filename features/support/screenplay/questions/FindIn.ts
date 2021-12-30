/* eslint-disable no-unused-vars */
import { Question } from '@serenity-js/core';
import { FindOptions, QueryMongoDb } from '..';

/* (collectionName: string) => Question.about('executes a query in database', (actor) => {
    QueryMongoDb.as(actor).findInCollection(collectionName, query); */

export class FindIn {
  constructor(private collectionName: string) {}

  static collection(collectionName: string) {
    return new FindIn(collectionName);
  }

  with(findOptions: FindOptions) {
    return Question.about('executes a query in database', (actor) => QueryMongoDb.as(actor).findInCollection(this.collectionName, findOptions));
  }
}
