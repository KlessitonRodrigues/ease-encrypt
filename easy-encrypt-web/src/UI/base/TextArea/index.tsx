import { Container, Row, TextAreaInput, TextAreaLabel } from './styled';

const TextArea = (props: TextAreaProps) => {
  const { label, placeHolder, value, onChange } = props;

  return (
    <Container>
      <TextAreaLabel>
        <Row>{label}</Row>
        <TextAreaInput
          placeholder={placeHolder}
          value={value}
          onChange={ev => onChange && onChange(ev.target.value)}
        />
      </TextAreaLabel>
    </Container>
  );
};

export default TextArea;
