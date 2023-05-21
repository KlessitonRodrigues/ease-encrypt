import { AES } from 'crypto-js';

export const textEncrypt = (args: TextEncryptArgs) => {
  const { text, password } = args;
  return AES.encrypt(text, password).toString();
};
