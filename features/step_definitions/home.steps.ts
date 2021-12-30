import { Given } from '@cucumber/cucumber';
import { actorCalled } from '@serenity-js/core';
import { UseAngular } from '@serenity-js/protractor';
import { Navigate } from '@serenity-js/web';
import { name } from 'faker';

Given('que o usuário tenha acessado a página inicial', async () => {
  await actorCalled(name.firstName()).attemptsTo(
    UseAngular.disableSynchronisation(),
    Navigate.to('/'),
  );
});

Given('que o usuário tenha acessado a página de login', async () => {
  await actorCalled(name.firstName()).attemptsTo(
    UseAngular.disableSynchronisation(),
    Navigate.to('/login/index'),
  );
});
