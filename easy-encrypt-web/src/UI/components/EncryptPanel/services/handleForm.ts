import { client } from 'src/config/initClient';

export const initialData: EncryptPanelForm = {
  inputText: '',
  outputText: '',
  password: '',
};

export const onEncrypt = (form: EncryptPanelForm) => {
  const outputText = client.text.ecrypt({ text: form.inputText, password: form.password });
  return { ...form, outputText };
};

export const onDecrypt = (form: EncryptPanelForm) => {
  const outputText = client.text.decrypt({ text: form.inputText, password: form.password });
  return { ...form, outputText };
};
