import { By, PageElement } from '@serenity-js/web';

export class NavBar {
  static loginButton = PageElement.located(By.css('a.nav-link[href*="/login"]')).describedAs('the login button');

  static logo = PageElement.located(By.css('a.navbar-brand')).describedAs('the logo');
}
