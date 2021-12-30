import { Then } from '@cucumber/cucumber';
import { Ensure } from '@serenity-js/assertions';
import {
  actorInTheSpotlight, Log, Note, TakeNote,
} from '@serenity-js/core';
import { UserForm } from '../support/models';
import { FindOneIn, isTheSameUserThat } from '../support/screenplay';

Then('ele deve ver que a conta foi criada na base', async () => {
  const user = await actorInTheSpotlight().answer(Note.of('the user data').as((answer: UserForm) => answer));
  await actorInTheSpotlight().attemptsTo(
    TakeNote.of(
      FindOneIn.collection('logins').with({ email: user.email }),
    ).as('the user found'),
    Log.the(Note.of('the user found')),
    Ensure.that(Note.of('the user found'), isTheSameUserThat(user)),
  );
});
