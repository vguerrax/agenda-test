import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';
import { UserForm } from '../../models';
import { CreateAccountForm } from '../../ui';

export class FillInTheCreateAccountForm {
  static with = (user: UserForm) => Task.where(
    '#actor fills in the "Create Account" form',
    Enter.theValue(user.name).into(CreateAccountForm.nameInput),
    Enter.theValue(user.email).into(CreateAccountForm.emailInput),
    Enter.theValue(user.password).into(CreateAccountForm.passwordInput),
    Enter.theValue(user.confirmPassword).into(CreateAccountForm.confirmPasswordInput),
  );
}
