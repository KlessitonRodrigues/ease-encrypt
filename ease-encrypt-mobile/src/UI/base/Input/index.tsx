import { Container, InputField, Label } from './styled';

const Input = (props: InputProps) => {
  const { value, label, placeHolder, onChange } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <InputField value={value} placeholder={placeHolder} onChangeText={onChange} />
    </Container>
  );
};

export default Input;
