import { By, PageElement } from '@serenity-js/web';

export class CreateAccountForm {
  static nameInput = PageElement.located(By.id('nomeCadastro')).describedAs('the "Name" input');

  static emailInput = PageElement.located(By.id('emailCadastro')).describedAs('the "Email" input');

  static passwordInput = PageElement.located(By.id('senhaCadastro')).describedAs('the "Password" input');

  static confirmPasswordInput = PageElement.located(By.id('confirmaSenhaCadastro')).describedAs('the "Confirm Password" input');

  static submitButton = PageElement.located(By.css('form.cadastroUsuarioForm button[type="submit"]')).describedAs('the "Create Account" button');

  static feedbackMessageOfField(targetField: {id: string | null, name: string | null}) {
    return PageElement.located(By.xpath('//input[@id="#id"]/../div[contains(@class, "feedback")]'.replace('#id', targetField.id))).describedAs(`the feedback messages of field "${targetField.name}"`);
  }
}
