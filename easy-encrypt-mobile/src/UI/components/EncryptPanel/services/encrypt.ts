import { client } from '../../../../config/clientInit';

export const initialData: EncryptPanelForm = {
  inputText: '',
  outputText: '',
  password: '',
  usePrivateKey: false,
};

export const onEncrypt = (form: EncryptPanelForm) => {
  const outputText = client.text.encrypt({
    text: form.inputText,
    password: form.password,
    usePrivateKey: form.usePrivateKey,
  });
  return { ...form, outputText };
};

export const onDecrypt = (form: EncryptPanelForm) => {
  const outputText = client.text.decrypt({
    text: form.inputText,
    password: form.password,
    usePrivateKey: form.usePrivateKey,
  });
  return { ...form, outputText };
};
