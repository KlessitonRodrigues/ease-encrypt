import { BsLock, BsGithub } from "react-icons/bs";
import Header from "src/UI/base/Header";
import PageContainer from "src/UI/base/PageContainer";
import InputText from "src/UI/components/InputText";

const HomePage = () => (
  <PageContainer>
    <Header icon={<BsLock />} title="Ease Encrypt" ghIcon={<BsGithub />} />
    <InputText />
  </PageContainer>
);

export default HomePage;
