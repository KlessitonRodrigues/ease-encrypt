import { setStringAsync } from 'expo-clipboard';

export const copyToClipboard = (text: string) => {
  setStringAsync(text);
};
