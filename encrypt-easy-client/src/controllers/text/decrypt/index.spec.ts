import { testEnviroment } from '../../../util/jest';
import { textDecrypt } from './index';

beforeAll(() => {
  testEnviroment();
});
describe('When decrypting a text', () => {
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

  test('Should decrypt a text with success using private key', () => {
    const result = textDecrypt({
      text: 'U2FsdGVkX19wqB7PUbjCjugcfLmKAB/QxGui/80F+KDgWEJV/4Q023Y5kzlN2KIooUc/JdCAnv1Ox67jFYk2Cg==',
      password: '123',
      usePrivateKey: true,
    });
    expect(result).toBe('TESTING');
  });

  test('Should throw an error if there is not PRIVATE_KEY', () => {
    try {
      process.env.CLIENT_PRIVATE_KEY = '';
      textDecrypt({
        text: 'TESTING',
        password: '123',
        usePrivateKey: true,
      });
    } catch (e) {
      expect(e.message).toBe('privateKeyNotFound');
    }
    testEnviroment();
  });

  test('Should return an empty string when there is not valid text or password', () => {
    const noTextResult = textDecrypt({ text: '', password: '123' });
    expect(noTextResult).toBeFalsy();

    const noPasswordResult = textDecrypt({ text: 'TESTING', password: '' });
    expect(noPasswordResult).toBeFalsy();
  });
});
