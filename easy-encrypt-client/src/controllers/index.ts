import { textDecrypt } from './text/decrypt';
import { textEncrypt } from './text/encrypt';

export const controllers = () => ({
  text: {
    ecrypt: textEncrypt,
    decrypt: textDecrypt,
  },
});
