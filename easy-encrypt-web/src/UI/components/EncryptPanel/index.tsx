import { useState } from 'react';
import { RxCopy, RxLockClosed, RxLockOpen2 } from 'react-icons/rx';
import Button from 'src/UI/base/Button';
import CheckOption from 'src/UI/base/CheckOption';
import Input from 'src/UI/base/Input';
import TextArea from 'src/UI/base/TextArea';

import { copyToClipboard } from './services/copyText';
import { initialData, onDecrypt, onEncrypt } from './services/handleForm';
import { Container, InputPassword, InputText, Options, OptionsTitle, ResultText } from './styled';

const EncryptPanel = () => {
  const [form, setform] = useState(initialData);

  return (
    <Container>
      <InputText>
        <TextArea
          label="Text"
          value={form.inputText}
          onChange={inputText => setform({ ...form, inputText })}
        />
      </InputText>

      <InputPassword>
        <OptionsTitle>Encrypt form</OptionsTitle>
        <Options>
          <CheckOption
            title="Strong"
            description="Encrypt using EAS algorithm"
            checked={!form.usePrivateKey}
            onChange={() => setform({ ...form, usePrivateKey: false })}
          />
          <CheckOption
            title="Very Strong"
            description={[
              'Encrypt using EAS algorithm',
              'Only can be descrypted using Easy Encrypt',
            ]}
            checked={form.usePrivateKey}
            onChange={() => setform({ ...form, usePrivateKey: true })}
          />
        </Options>

        <Input
          label="Password"
          value={form.password}
          onChange={password => setform({ ...form, password })}
        />

        <Button
          variant="solid"
          iconLeft={<RxLockClosed />}
          label="Encrypt"
          onClick={() => setform(onEncrypt(form))}
          disabled={!form.inputText}
        />
        <Button
          variant="solid"
          color="green"
          iconLeft={<RxLockOpen2 />}
          label="Decrypt"
          onClick={() => setform(onDecrypt(form))}
          disabled={!form.inputText}
        />
      </InputPassword>

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
          disabled={!form.outputText}
          onClick={() => copyToClipboard(form.outputText)}
        />
      </ResultText>
    </Container>
  );
};

export default EncryptPanel;
