import useGlobalContext from 'src/hooks/useGlobalContext';

import { Icons } from '../Icons';
import { Container, Row, Title } from './styled';

const Header = () => {
  const [global, setGlobal] = useGlobalContext();
  console.log(global);

  return (
    <Container>
      <Row>
        <Icons type="lock-fill" size={26} onPress={() => setGlobal({ ...global, path: '/home' })} />
        <Title>Easy Encrypt</Title>
      </Row>
      <Row>
        <Icons
          type="settings"
          size={26}
          onPress={() => setGlobal({ ...global, path: '/settings' })}
        />
      </Row>
    </Container>
  );
};

export default Header;
