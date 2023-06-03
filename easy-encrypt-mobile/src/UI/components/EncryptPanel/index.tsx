import IonIcons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import Button from 'src/UI/base/Button';
import CheckOption from 'src/UI/base/CheckOption';
import { Icons } from 'src/UI/base/Icons';
import Input from 'src/UI/base/Input';

import { copyToClipboard } from './services/copyText';
import { initialData, onDecrypt, onEncrypt } from './services/encrypt';
import { Container, OptionContainer, OptionTitle, Row } from './styled';

const EncryptPanel = () => {
  const [form, setForm] = useState(initialData);

  return (
    <Container>
      <Input label="Text" onChange={inputText => setForm({ ...form, inputText })} />
      <Input label="Password" onChange={password => setForm({ ...form, password })} />

      <OptionContainer>
        <OptionTitle>Encrypt form</OptionTitle>
        <CheckOption
          checked={!form.usePrivateKey}
          onChange={() => setForm({ ...form, usePrivateKey: false })}
          title="Strong"
          description="Encrypt using EAS algorith"
        />
        <CheckOption
          checked={form.usePrivateKey}
          onChange={() => setForm({ ...form, usePrivateKey: true })}
          title="Very Strong"
          description={['Encrypt using EAS algorith', 'Only can be decrypted using Easy encrypt']}
        />
      </OptionContainer>

      <Row>
        <Button
          iconLeft={<Icons type="lock" />}
          label="Encrypt"
          onClick={() => setForm(onEncrypt(form))}
        />
        <Button
          iconLeft={<Icons type="lock-open" />}
          label="Decrypt"
          color="green"
          onClick={() => setForm(onDecrypt(form))}
        />
      </Row>

      <Input type="textArea" label="Result Text" value={form.outputText} readonly />
      <Button
        iconLeft={<Icons type="copy" color="gray" />}
        label="Copy"
        color="transparent"
        onClick={() => copyToClipboard(form.outputText)}
      />
    </Container>
  );
};

export default EncryptPanel;
