import { AES, enc } from 'crypto-js';

export const decrypt = (args: TextDecryptArgs) => {
  const { text, password } = args;
  return AES.decrypt(text, password).toString(enc.Utf8);
};
