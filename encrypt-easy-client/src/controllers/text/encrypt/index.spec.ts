import { testEnviroment } from '../../../util/jest';
import { textEncrypt } from './index';

beforeAll(() => {
  testEnviroment();
});

describe('When encrypting a text', () => {
  test('Should encrypt a text with success', () => {
    const result = textEncrypt({ text: 'TESTING', password: '123' });
    expect(result).toBeTruthy();
  });

  test('Should encrypt a text with success using private key', () => {
    const result = textEncrypt({
      text: 'TESTING',
      password: '123',
      usePrivateKey: true,
    });
    expect(result).toBeTruthy();
  });

  test('Should throw an error if there is not PRIVATE_KEY', () => {
    try {
      process.env.CLIENT_PRIVATE_KEY = '';
      textEncrypt({
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
    const noTextResult = textEncrypt({ text: '', password: '123' });
    expect(noTextResult).toBeFalsy();

    const noPasswordResult = textEncrypt({ text: 'TESTING', password: '' });
    expect(noPasswordResult).toBeFalsy();
  });
});
