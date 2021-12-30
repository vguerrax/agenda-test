import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { BrowseTheWebWithProtractor } from '@serenity-js/protractor';
import { MongoClient } from 'mongodb';
import { protractor } from 'protractor';
import { QueryMongoDb } from '.';

export class Actors implements Cast {
  prepare(actor: Actor) {
    return actor.whoCan(
      TakeNotes.usingAnEmptyNotepad(),
      BrowseTheWebWithProtractor.using(protractor.browser),
      QueryMongoDb.using(new MongoClient(process.env.CONNECTIONSTRING)),
    );
  }
}
