import { BsGithub } from "react-icons/bs";
import { RxLockClosed } from "react-icons/rx";
import Header from "src/UI/base/Header";
import PageContainer from "src/UI/base/PageContainer";
import EncryptPanel from "src/UI/components/EncryptPanel";

const HomePage = () => (
  <PageContainer>
    <Header
      icon={<RxLockClosed />}
      title="Ease Encrypt"
      ghIcon={<BsGithub />}
    />
    <EncryptPanel />
  </PageContainer>
);

export default HomePage;
