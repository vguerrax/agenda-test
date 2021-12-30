import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { actorCalled, engage, Interaction } from '@serenity-js/core';

import { Actors, QueryMongoDb } from '../support/screenplay';

BeforeAll(() => {
  engage(new Actors());
});

AfterAll(() => {
  actorCalled('System').attemptsTo(
    Interaction.where('#actor ends the database connection', (actor) => QueryMongoDb.as(actor).close()),
  );
});
