import { useState } from 'react';
import { BsDice5, BsWrench } from 'react-icons/bs';
import { RxCopy, RxLockClosed } from 'react-icons/rx';
import Button from 'src/UI/base/Button';
import Input from 'src/UI/base/Input';
import TextArea from 'src/UI/base/TextArea';
import { client } from 'src/initClient';

import { encryptFormData } from './services/formData';
import { randomText } from './services/randomText';
import { Container, InputPasss, InputText, ResultText } from './styled';

const EncryptPanel = () => {
  const [form, setform] = useState(encryptFormData);

  const onEncrypt = () => {
    const outputText = client.text.ecrypt({ text: form.inputText, password: form.password });
    setform({ ...form, outputText });
  };

  const onDecrypt = () => {
    const outputText = client.text.decrypt({ text: form.inputText, password: form.password });
    setform({ ...form, outputText });
  };

  return (
    <Container>
      <InputText>
        <TextArea
          label="Text to Encrypt"
          value={form.inputText}
          onChange={inputText => setform({ ...form, inputText })}
        />
      </InputText>

      <InputPasss>
        <Input
          label="Password"
          value={form.password}
          onChange={password => setform({ ...form, password })}
        />
        <Button variant="solid" iconLeft={<RxLockClosed />} label="Encrypt" onClick={onEncrypt} />
        <Button
          variant="solid"
          color="yellow"
          iconLeft={<RxLockClosed />}
          label="Decrypt"
          onClick={onDecrypt}
        />
        <Button
          variant="outline"
          iconLeft={<BsDice5 />}
          label="Random"
          onClick={() => setform({ ...form, password: randomText() })}
        />
      </InputPasss>

      <ResultText>
        <TextArea
          label="Encrypted Text"
          value={form.outputText}
          onChange={outputText => setform({ ...form, outputText })}
        />
        <Button variant="solid" iconLeft={<RxCopy />} label="Copy" />
      </ResultText>
    </Container>
  );
};

export default EncryptPanel;
