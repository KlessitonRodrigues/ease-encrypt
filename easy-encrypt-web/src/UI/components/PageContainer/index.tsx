import { PropsWithChildren } from 'react';
import { RxGithubLogo, RxLockClosed } from 'react-icons/rx';
import Header from 'src/UI/base/Header';

import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => (
  <Container>
    <Header
      icon={<RxLockClosed />}
      title="Easy Encrypt"
      ghIcon={<RxGithubLogo />}
      ghLink="https://github.com/KlessitonRodrigues/easy-encrypt"
    />
    <Content>{props.children}</Content>
  </Container>
);

export default PageContainer;
