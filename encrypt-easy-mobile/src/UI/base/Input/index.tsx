import { useTheme } from 'styled-components/native';

import { Container, InputField, Label } from './styled';

const Input = (props: InputProps) => {
  const { value, label, placeHolder, readonly, onChange } = props;
  const theme = useTheme();

  return (
    <Container type={props.type}>
      <Label>{label}</Label>
      <InputField
        type={props.type}
        value={value}
        onChangeText={onChange}
        selectionColor="gray"
        multiline
        editable={!readonly}
        placeholder={placeHolder}
        placeholderTextColor={theme.colors.text4}
      />
    </Container>
  );
};

export default Input;
