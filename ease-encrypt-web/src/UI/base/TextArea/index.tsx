import If from '../If';
import InfoTag from '../InfoTag';
import { Container, Row, TextAreaInput, TextAreaLabel } from './styled';

const TextArea = (props: TextAreaProps) => {
  const { label, placeHolder, value, onChange, description, required } = props;

  return (
    <Container>
      <TextAreaLabel>
        <Row>
          {label}
          {(description || required) && <InfoTag {...props} />}
        </Row>
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
