import { AES, enc } from 'crypto-js';

const decrypt = (args: TextDecryptArgs) => {
  const { text, password } = args;
  return AES.decrypt(text, password).toString(enc.Utf8);
};

const decryptWithPrivateKey = (args: TextDecryptArgs) => {
  const { text, password } = args;
  const privateKey = process.env.CLIENT_PRIVATE_KEY;
  if (!privateKey) throw Error('privateKeyNotFound');

  const userText = AES.decrypt(text, privateKey).toString(enc.Utf8);
  return AES.decrypt(userText, password).toString(enc.Utf8);
};

export const textDecrypt = (args: TextDecryptArgs) => {
  const { usePrivateKey } = args;
  if (usePrivateKey) return decryptWithPrivateKey(args);
  return decrypt(args);
};
