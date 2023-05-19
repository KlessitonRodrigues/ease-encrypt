import { Container } from "./styled";
import { BsFileText, BsLockFill } from "react-icons/bs";
import Button from "src/UI/base/Button";
import TextArea from "src/UI/base/TextArea";

const InputText = () => {
  return (
    <Container>
      <TextArea label="Text to Encrypt" />
      <Button variant="solid" iconLeft={<BsLockFill />} label="Encrypt" />
      <Button variant="solid" iconLeft={<BsFileText />} label="Txt" />
    </Container>
  );
};

export default InputText;
