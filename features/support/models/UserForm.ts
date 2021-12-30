import { compareSync } from 'bcryptjs';

import { UserMongo } from './UserMongo';

/* eslint-disable no-unused-vars */
export class UserForm {
  constructor(
    public name: string,
    public email:string,
    public password: string,
    public confirmPassword?: string,
  // eslint-disable-next-line no-empty-function
  ) {}

  static create(): UserForm {
    return new UserForm('', '', '', '');
  }

  withName(name: string): this {
    this.name = name;
    return this;
  }

  withEmail(email: string): this {
    this.email = email;
    return this;
  }

  withPassword(password: string): this {
    this.password = password;
    return this;
  }

  withConfirmPasswordEquals(): this {
    this.confirmPassword = this.password;
    return this;
  }

  withConfirmPasswordENotquals(): this {
    this.confirmPassword = this.password.split('').reverse().join('');
    return this;
  }

  isTheSameThat(userMongo: UserMongo): boolean {
    if (!(this.name === userMongo.name)) return false;
    if (!(this.email === userMongo.email)) return false;
    if (!compareSync(this.password, userMongo.password)) return false;
    return true;
  }
}
