import IonIcons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

import Button from '../../base/Button';
import Input from '../../base/Input';
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
          iconLeft={<IonIcons name="lock-closed-outline" color="white" size={20} />}
          label="Encrypt"
          onClick={() => setForm(onEncrypt(form))}
        />
        <Button
          iconLeft={<IonIcons name="lock-open-outline" color="white" size={20} />}
          label="Decrypt"
          color="yellow"
          onClick={() => setForm(onDecrypt(form))}
        />
        <Button
          iconLeft={<IonIcons name="copy-outline" color="gray" size={20} />}
          label="Copy"
          color="transparent"
        />
      </Row>

      <Input label="Result Text" value={form.outputText} />
      <Button
        iconLeft={<IonIcons name="copy-outline" color="gray" size={20} />}
        label="Copy"
        color="transparent"
      />
    </Container>
  );
};

export default EncryptPanel;
