import { ValidationPatterns } from './validation-patterns';

export const ValidationMessages = {
  LETTERS_ONLY: 'Only letters are allowed',
  NUMBERS_ONLY: 'Only numbers are allowed',
  EMAIL: 'Please enter a valid email address',
  ALPHANUMERIC: 'Only letters and numbers are allowed',
};

export const PatternMessages: { [pattern: string]: string } = {
  [ValidationPatterns.LETTERS_ONLY.source]: ValidationMessages.LETTERS_ONLY,
  [ValidationPatterns.NUMBERS_ONLY.source]: ValidationMessages.NUMBERS_ONLY,
  [ValidationPatterns.EMAIL.source]: ValidationMessages.EMAIL,
  [ValidationPatterns.ALPHANUMERIC.source]: ValidationMessages.ALPHANUMERIC,
};
