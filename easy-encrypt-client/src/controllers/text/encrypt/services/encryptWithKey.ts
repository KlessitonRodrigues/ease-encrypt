import { AES } from 'crypto-js';

export const encryptWithPrivateKey = (args: TextDecryptArgs) => {
  const { text, password } = args;
  const privateKey = process.env.CLIENT_PRIVATE_KEY;
  if (!privateKey) throw Error('privateKeyNotFound');

  const userText = AES.encrypt(text, password).toString();
  return AES.encrypt(userText, privateKey).toString();
};
