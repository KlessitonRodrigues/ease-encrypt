import { Container, GitHub, Icon, Left, Right, Title } from './styled';

const Header = (props: HeaderProps) => {
  const { icon, title, ghIcon, ghLink } = props;

  return (
    <Container>
      <Left>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
      </Left>
      <Right>
        <GitHub href={ghLink} target="_blank">
          {ghIcon}
        </GitHub>
      </Right>
    </Container>
  );
};

export default Header;
