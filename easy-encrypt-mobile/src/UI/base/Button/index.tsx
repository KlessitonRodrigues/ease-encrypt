import { Container, Icon, Label } from './styled';

const Button = (props: ButtonProps) => {
  const { label, iconLeft, color, disabled, onClick } = props;

  return (
    <Container color={color} onPress={onClick}>
      <Icon>{iconLeft}</Icon>
      <Label color={color}>{label}</Label>
    </Container>
  );
};

export default Button;
