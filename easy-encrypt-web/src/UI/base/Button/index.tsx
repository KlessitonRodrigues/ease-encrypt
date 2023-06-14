import { Container, Icon, Label } from './styled';

const Button = (props: ButtonProps) => {
  const { label, iconLeft, iconRight, onChange } = props;

  return (
    <Container {...props} onClick={() => onChange && onChange()}>
      <Icon>{iconLeft}</Icon>
      <Label>{label}</Label>
      <Icon>{iconRight}</Icon>
    </Container>
  );
};

export default Button;
