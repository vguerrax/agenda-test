/* eslint-disable no-unused-vars */
import { Question } from '@serenity-js/core';
import { FindOptions, QueryMongoDb } from '..';

export class FindOneIn {
  constructor(private collectionName: string) {}

  static collection(collectionName: string) {
    return new FindOneIn(collectionName);
  }

  with(findOptions: FindOptions) {
    return Question.about('executes a query in database', (actor) => QueryMongoDb.as(actor).findOneInCollection(this.collectionName, findOptions));
  }
}
