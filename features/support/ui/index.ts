import { Adapter, Question } from '@serenity-js/core';
import { PageElement } from '@serenity-js/web';

export * from './NavBar';
export * from './CreateAccountForm';
export * from './Messages';

export type Target = Question<Promise<PageElement<unknown>>> & Adapter<PageElement<unknown>>;
