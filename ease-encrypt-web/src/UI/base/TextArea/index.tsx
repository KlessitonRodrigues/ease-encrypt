import { Container, TextAreaInput, TextAreaLabel } from './styled';

const TextArea = (props: TextAreaProps) => {
  const { label, placeHolder, value, onChange } = props;
  return (
    <Container>
      <TextAreaLabel>
        {label}
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
