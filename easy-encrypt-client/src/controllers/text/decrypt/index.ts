import { decrypt } from './services/decrypt';
import { decryptWithPrivateKey } from './services/decryptWithKey';

export const textDecrypt = (args: TextDecryptArgs) => {
  const { text, password, usePrivateKey } = args;

  if (!text || !password) return '';

  if (usePrivateKey) return decryptWithPrivateKey(args);

  return decrypt(args);
};
