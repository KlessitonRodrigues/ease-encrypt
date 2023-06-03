import { splitTextArr } from './services/splitTextArr';
import { Container, Description, Title } from './styled';

const CheckOption = (props: CheckOptionProps) => {
  const { title, description, checked, onChange } = props;

  return (
    <Container checked={checked} onTouchStart={() => onChange(!checked)}>
      <Title checked={checked}>{title}</Title>
      <Description>{splitTextArr(description)}</Description>
    </Container>
  );
};

export default CheckOption;
