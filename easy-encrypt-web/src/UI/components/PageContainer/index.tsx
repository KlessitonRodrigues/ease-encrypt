import { PropsWithChildren } from 'react';
import { BsGithub } from 'react-icons/bs';
import { RxLockClosed } from 'react-icons/rx';
import Header from 'src/UI/base/Header';

import { Container } from './styled';

const PageContainer = (props: PropsWithChildren) => (
  <Container>
    <Header icon={<RxLockClosed />} title="Easy Encrypt" ghIcon={<BsGithub />} />
    {props.children}
  </Container>
);

export default PageContainer;
