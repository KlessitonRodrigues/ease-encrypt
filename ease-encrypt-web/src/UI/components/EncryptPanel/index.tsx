import { Container, InputPasss, InputText, ResultText } from "./styled";
import { BsDice5, BsWrench } from "react-icons/bs";
import { RxCopy, RxLockClosed } from "react-icons/rx";
import Button from "src/UI/base/Button";
import Input from "src/UI/base/Input";
import TextArea from "src/UI/base/TextArea";

const EncryptPanel = () => {
  return (
    <Container>
      <InputText>
        <TextArea label="Text to Encrypt" />
      </InputText>

      <InputPasss>
        <Input label="Password" />
        <Button variant="solid" iconLeft={<RxLockClosed />} label="Encrypt" />
        <Button variant="outline" iconLeft={<BsDice5 />} label="Random" />
        <Button variant="outline" iconLeft={<BsWrench />} label="Advanced" />
      </InputPasss>

      <ResultText>
        <TextArea label="Encrypted Text" />
        <Button variant="solid" iconLeft={<RxCopy />} label="Copy" />
      </ResultText>
    </Container>
  );
};

export default EncryptPanel;
