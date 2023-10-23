import { splitDescription } from './services/splitDescription';
import { Container, Description, Text, Title } from './styled';

const CheckOption = (props: CheckOptionProps) => {
  const { checked, onChange, title, description } = props;

  return (
    <Container checked={checked} onClick={() => onChange(!checked)}>
      <Text>
        <Title>{title}</Title>
        <Description>{splitDescription(description)}</Description>
      </Text>
    </Container>
  );
};

export default CheckOption;
