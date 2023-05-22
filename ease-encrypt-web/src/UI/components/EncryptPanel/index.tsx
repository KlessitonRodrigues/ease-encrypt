import { useState } from 'react';
import { RxCopy, RxLockClosed, RxLockOpen2 } from 'react-icons/rx';
import Button from 'src/UI/base/Button';
import Input from 'src/UI/base/Input';
import TextArea from 'src/UI/base/TextArea';

import { copyToClipboard } from './services/copyText';
import { initialData, onDecrypt, onEncrypt } from './services/handleForm';
import { Container, InputPasss, InputText, ResultText } from './styled';

const EncryptPanel = () => {
  const [form, setform] = useState(initialData);

  return (
    <Container>
      <InputText>
        <TextArea
          label="Text Process"
          value={form.inputText}
          onChange={inputText => setform({ ...form, inputText })}
        />
      </InputText>

      <InputPasss>
        <Input
          label="Password"
          description="Remind to copy te password"
          value={form.password}
          onChange={password => setform({ ...form, password })}
        />
        <Button
          variant="solid"
          iconLeft={<RxLockClosed />}
          label="Encrypt"
          onClick={() => setform(onEncrypt(form))}
        />
        <Button
          variant="solid"
          color="yellow"
          iconLeft={<RxLockOpen2 />}
          label="Decrypt"
          onClick={() => setform(onDecrypt(form))}
        />
        <Button
          variant="outline"
          iconLeft={<RxCopy />}
          label="Copy"
          onClick={() => copyToClipboard(form.password)}
        />
      </InputPasss>

      <ResultText>
        <TextArea
          label="Result Text"
          value={form.outputText}
          onChange={outputText => setform({ ...form, outputText })}
        />
        <Button
          variant="outline"
          iconLeft={<RxCopy />}
          label="Copy"
          onClick={() => copyToClipboard(form.outputText)}
        />
      </ResultText>
    </Container>
  );
};

export default EncryptPanel;
