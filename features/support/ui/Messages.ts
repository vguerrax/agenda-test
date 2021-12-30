import { By, PageElement } from '@serenity-js/web';

export class Messages {
  static successMessage = PageElement.located(By.css('div.alert-success')).describedAs('the success message');

  static errorMessage = PageElement.located(By.css('div.alert-danger')).describedAs('the error message');
}
