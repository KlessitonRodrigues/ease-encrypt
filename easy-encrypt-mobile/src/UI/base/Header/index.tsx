import { Icons } from '../Icons';
import { Container, Row, Title } from './styled';

const Header = () => {
  return (
    <Container>
      <Row>
        <Icons type="lock-fill" size={26} />
        <Title>Easy Encrypt</Title>
      </Row>
      <Row>
        <Icons type="settings" size={26} />
      </Row>
    </Container>
  );
};

export default Header;
