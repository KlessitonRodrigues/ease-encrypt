export const copyToClipboard = async (text: string) => {
  if (!text) return false;

  await navigator.clipboard.writeText(text);
  alert('Copied!');
  return true;
};
