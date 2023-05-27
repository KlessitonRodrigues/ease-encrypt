import { Container, InputField, Label } from './styled';

const Input = (props: InputProps) => {
  const { value, label, placeHolder, readonly, onChange } = props;

  return (
    <Container type={props.type}>
      <Label>{label}</Label>
      <InputField
        type={props.type}
        value={value}
        placeholder={placeHolder}
        onChangeText={onChange}
        selectionColor="gray"
        multiline
        editable={!readonly}
      />
    </Container>
  );
};

export default Input;
