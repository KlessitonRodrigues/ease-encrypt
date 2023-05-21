import { Container, GitHubIcon, Icon, Left, Right, Title } from './styled';

const Header = (props: HeaderProps) => {
  const { icon, title, ghIcon } = props;

  return (
    <Container>
      <Left>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
      </Left>
      <Right>
        <GitHubIcon>{ghIcon}</GitHubIcon>
      </Right>
    </Container>
  );
};

export default Header;
