import { Ability, UsesAbilities } from '@serenity-js/core';
import {
  Db, Document, FindCursor, MongoClient,
} from 'mongodb';

export type FindOptions = FindCursor | {};

export class QueryMongoDb implements Ability {
  private db: Db | null = null;

  static as(actor: UsesAbilities): QueryMongoDb {
    return actor.abilityTo(QueryMongoDb);
  }

  static using(client: MongoClient) {
    return new QueryMongoDb(client);
  }

  // eslint-disable-next-line no-empty-function, no-unused-vars
  constructor(private readonly client: MongoClient) {}

  async insertInCollection(collectionName: string, value: Document) {
    await this.connect();
    const r = await this.db.collection(collectionName).insertOne(value);
    return r;
  }

  async findInCollection<T extends Document>(collectionName: string, findOptions: FindOptions) {
    await this.connect();
    const r = await this.db.collection(collectionName).find(findOptions).toArray() as unknown as T;
    return r;
  }

  async findOneInCollection(collectionName: string, findOptions: FindOptions) {
    await this.connect();
    const r = await this.db.collection(collectionName).findOne(findOptions);
    return r;
  }

  async findOneInCollectionAndDelete(collectionName: string, findOptions: FindOptions) {
    await this.connect();
    const r = await this.db.collection(collectionName).findOneAndDelete(findOptions);
    return r;
  }

  async close() {
    await this.client.close();
  }

  async connect() {
    if (!this.db) {
      await this.client.connect();
      this.db = this.client.db();
    }
  }
}
