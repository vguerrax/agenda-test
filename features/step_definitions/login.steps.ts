import { Then, When } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import {
  actorInTheSpotlight, Question, TakeNote,
} from '@serenity-js/core';
import { Click, Enter, Text } from '@serenity-js/web';
import { UserForm } from '../support/models';
import { FillInTheCreateAccountForm } from '../support/screenplay';
import { CreateAccountForm, Messages, Target } from '../support/ui';

When('ele preenche o formulário para criar uma conta', async () => {
  const user = UserForm.create()
    .withName('Automated Test')
    .withEmail(`email${Date.now()}@email.com`)
    .withPassword('123456')
    .withConfirmPasswordEquals();
  await actorInTheSpotlight().attemptsTo(
    FillInTheCreateAccountForm.with(user),
    TakeNote.of(Question.about('the user data', () => user)).as('the user data'),
  );
});

When('ele envia o formulário para criar uma conta', async () => {
  await actorInTheSpotlight().attemptsTo(
    Click.on(CreateAccountForm.submitButton),
  );
});

When('ele preenche o campo {string} do formulário para criar uma conta com o valor {string}', async (field: string, value: string) => {
  let target: Target | null = null;
  switch (field) {
    case 'email':
      target = CreateAccountForm.emailInput;
      break;
    case 'senha':
      target = CreateAccountForm.passwordInput;
      break;
    default:
      target = CreateAccountForm.nameInput;
  }

  await actorInTheSpotlight().attemptsTo(
    Enter.theValue(value).into(target),
  );
});

Then('ele deve ver a mensagem de sucesso {string}', async (message: string) => {
  await actorInTheSpotlight().attemptsTo(
    Ensure.that(Text.of(Messages.successMessage), equals(message)),
  );
});

Then('ele deve ver a mensagem de erro {string} abaixo do campo {string} do formulário para criar uma conta', async (message: string, field: string) => {
  const targetField: {id: string | null, name: string | null} = { id: null, name: null };
  switch (field) {
    case 'email':
      targetField.id = 'emailCadastro';
      targetField.name = 'Email';
      break;
    case 'senha':
      targetField.id = 'senhaCadastro';
      targetField.name = 'Password';
      break;
    default:
      targetField.id = 'nomeCadastro';
      targetField.name = 'Name';
  }

  await actorInTheSpotlight().attemptsTo(
    Ensure.that(Text.of(CreateAccountForm.feedbackMessageOfField(targetField)), equals(message)),
  );
});
