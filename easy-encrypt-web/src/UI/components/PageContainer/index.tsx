import { PropsWithChildren } from 'react';
import { BsGithub } from 'react-icons/bs';
import { RxGithubLogo, RxLockClosed } from 'react-icons/rx';
import Header from 'src/UI/base/Header';

import { Container } from './styled';

const PageContainer = (props: PropsWithChildren) => (
  <Container>
    <Header
      icon={<RxLockClosed />}
      title="Easy Encrypt"
      ghIcon={<RxGithubLogo />}
      ghLink="https://github.com/KlessitonRodrigues/easy-encrypt"
    />
    {props.children}
  </Container>
);

export default PageContainer;
