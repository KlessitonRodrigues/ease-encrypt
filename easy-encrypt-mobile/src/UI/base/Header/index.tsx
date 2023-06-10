import useGlobalContext from 'src/hooks/useGlobalContext';

import Icons from '../Icons';
import { Container, Row, Title } from './styled';

const Header = () => {
  const [global, setGlobal] = useGlobalContext();

  return (
    <Container>
      <Row>
        <Icons type="lock" size={26} />
        <Title>Easy Encrypt</Title>
      </Row>
      <Row>
        <Icons
          type={global.darkTheme ? 'moon-fill' : 'moon'}
          size={26}
          onPress={() => setGlobal({ ...global, darkTheme: !global.darkTheme })}
        />
      </Row>
    </Container>
  );
};

export default Header;
