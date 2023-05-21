import { expect, test } from '@jest/globals';

import { textDecrypt } from './index';

test('Should decrypt a text with success', () => {
  const result = textDecrypt({
    text: 'U2FsdGVkX1/mTRPkNIrP1DsGNcE+3yZxLCCvPBelTmk=',
    password: '123',
  });
  expect(result).toBe('TESTING');
});

test('Should not decrypt a text with wrong password', () => {
  const result = textDecrypt({
    text: 'U2FsdGVkX1/mTRPkNIrP1DsGNcE+3yZxLCCvPBelTmk=',
    password: '321',
  });
  expect(result).toBeFalsy();
});
