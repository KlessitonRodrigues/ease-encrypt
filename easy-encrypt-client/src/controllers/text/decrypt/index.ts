import { AES, enc } from 'crypto-js';

export const textDecrypt = (args: TextDecryptArgs) => {
  const { text, password } = args;
  return AES.decrypt(text, password).toString(enc.Utf8);
};
