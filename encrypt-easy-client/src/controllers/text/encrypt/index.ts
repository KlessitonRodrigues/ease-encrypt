import { encrypt } from './services/encrypt';
import { encryptWithPrivateKey } from './services/encryptWithKey';

export const textEncrypt = (args: TextEncryptArgs): string => {
  const { text, password, usePrivateKey } = args;

  if (!text || !password) return '';

  if (usePrivateKey) return encryptWithPrivateKey(args);

  return encrypt(args);
};
