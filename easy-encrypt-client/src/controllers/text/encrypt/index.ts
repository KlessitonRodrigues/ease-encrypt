import { AES } from 'crypto-js';

const encrypt = (args: TextDecryptArgs) => {
  const { text, password } = args;
  return AES.encrypt(text, password).toString();
};

const encryptWithPrivateKey = (args: TextDecryptArgs) => {
  const { text, password } = args;
  const privateKey = process.env.CLIENT_PRIVATE_KEY;
  if (!privateKey) throw Error('privateKeyNotFound');

  const userText = AES.encrypt(text, password).toString();
  return AES.encrypt(userText, privateKey).toString();
};

export const textEncrypt = (args: TextEncryptArgs) => {
  const { usePrivateKey } = args;
  if (usePrivateKey) return encryptWithPrivateKey(args);
  return encrypt(args);
};
