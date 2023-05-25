import Input from '../../base/Input';
import { Container } from './styled';

const EncryptPanel = () => {
  return (
    <Container>
      <Input label="Text" />
      <Input label="Password" />
      <Input label="Result Text" />
    </Container>
  );
};

export default EncryptPanel;
