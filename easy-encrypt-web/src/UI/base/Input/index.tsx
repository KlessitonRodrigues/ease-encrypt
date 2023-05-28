import { Container, InputField, Label } from './styled';

const Input = (props: InputProps) => {
  const { label, placeHolder, type, value, onChange } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <InputField
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={ev => onChange && onChange(ev.target.value)}
      />
    </Container>
  );
};

export default Input;
