import { AES, enc } from 'crypto-js';

export const decryptWithPrivateKey = (args: TextDecryptArgs) => {
  const { text, password } = args;
  const privateKey = process.env.CLIENT_PRIVATE_KEY;
  if (!privateKey) throw Error('privateKeyNotFound');

  const userText = AES.decrypt(text, privateKey).toString(enc.Utf8);
  return AES.decrypt(userText, password).toString(enc.Utf8);
};
