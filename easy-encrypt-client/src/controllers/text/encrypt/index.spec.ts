import { expect, test } from '@jest/globals';

import { textEncrypt } from './index';

test('Should encrypt a text with success', () => {
  const result = textEncrypt({ text: 'TESTING', password: '123' });
  expect(result).toBeTruthy();
});
