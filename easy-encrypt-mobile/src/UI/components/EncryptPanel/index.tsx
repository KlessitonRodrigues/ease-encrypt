import IonIcons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import Button from 'src/UI/base/Button';
import { Icons } from 'src/UI/base/Icons';
import Input from 'src/UI/base/Input';

import { copyToClipboard } from './services/copyText';
import { initialData, onDecrypt, onEncrypt } from './services/encrypt';
import { Container, Row } from './styled';

const EncryptPanel = () => {
  const [form, setForm] = useState(initialData);

  return (
    <Container>
      <Input label="Text" onChange={inputText => setForm({ ...form, inputText })} />
      <Input label="Password" onChange={password => setForm({ ...form, password })} />

      <Row>
        <Button
          iconLeft={<Icons type="lock" />}
          label="Encrypt"
          onClick={() => setForm(onEncrypt(form))}
        />
        <Button
          iconLeft={<Icons type="lock-open" />}
          label="Decrypt"
          color="yellow"
          onClick={() => setForm(onDecrypt(form))}
        />
        <Button
          iconLeft={<Icons type="copy" color="gray" />}
          label="Copy"
          color="transparent"
          onClick={() => copyToClipboard(form.password)}
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
