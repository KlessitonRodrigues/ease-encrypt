import { Container, Label } from './styled';

const Input = (props: ButtonProps) => {
  const { label, onClick } = props;

  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

export default Input;
