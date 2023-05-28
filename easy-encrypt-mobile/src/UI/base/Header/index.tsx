import IonIcons from '@expo/vector-icons/Ionicons';

import { Container, Row, Title } from './styled';

const Header = () => {
  return (
    <Container>
      <Row>
        <IonIcons name="lock-closed" color={'white'} size={28} />
        <Title>Easy Encrypt</Title>
      </Row>
    </Container>
  );
};

export default Header;
