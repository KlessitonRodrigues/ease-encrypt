import { AES } from 'crypto-js';

export const encrypt = (args: TextDecryptArgs) => {
  const { text, password } = args;
  return AES.encrypt(text, password).toString();
};
