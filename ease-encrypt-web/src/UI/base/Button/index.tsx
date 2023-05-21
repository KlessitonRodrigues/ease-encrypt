import { Container, Icon, Label } from './styled';

const Button = (props: ButtonProps) => {
  const { label, iconLeft, iconRight, onClick, variant, color } = props;

  return (
    <Container variant={variant} color={color} onClick={() => onClick && onClick()}>
      <Icon>{iconLeft}</Icon>
      <Label>{label}</Label>
      <Icon>{iconRight}</Icon>
    </Container>
  );
};

export default Button;
