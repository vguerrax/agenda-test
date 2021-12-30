import { Answerable, Expectation } from '@serenity-js/core';
import { UserForm } from '../../models';
import { UserMongo } from '../../models/UserMongo';

export const isTheSameUserThat = (expected: Answerable<UserForm>): Expectation<UserMongo, UserForm> => Expectation.thatActualShould<UserMongo, UserForm>('is the same that', expected)
  .soThat((actual: UserMongo, expectedBe: UserForm) => expectedBe.isTheSameThat(actual));
