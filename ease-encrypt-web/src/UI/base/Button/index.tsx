import { Container, Icon, Label } from './styled';

const Button = (props: ButtonProps) => {
  const { label, iconLeft, iconRight, onClick, disabled } = props;

  return (
    <Container {...props} onClick={() => onClick && !disabled && onClick()}>
      <Icon>{iconLeft}</Icon>
      <Label>{label}</Label>
      <Icon>{iconRight}</Icon>
    </Container>
  );
};

export default Button;
