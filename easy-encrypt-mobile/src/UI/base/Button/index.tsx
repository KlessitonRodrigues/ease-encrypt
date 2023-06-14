import { Container, Icon, Label } from './styled';

const Button = (props: ButtonProps) => {
  const { label, iconLeft, color, onChange } = props;

  return (
    <Container color={color} onPress={onChange}>
      <Icon>{iconLeft}</Icon>
      <Label color={color}>{label}</Label>
    </Container>
  );
};

export default Button;
