import Icons from 'src/UI/base/Icons';
import useLangContext from 'src/hooks/useLangContext';
import useThemeTypeContext from 'src/hooks/useThemeTypeContext';

import { langSwitch } from './services/langSwitch';
import { Container, GitHub, Icon, LangSwitch, Left, Right, Title } from './styled';

const Header = () => {
  const [themeType, setThemeType] = useThemeTypeContext();
  const [lang, setLang] = useLangContext();

  return (
    <Container>
      <Left>
        <Icon>
          <Icons type="lock" size={8} />
        </Icon>
        <Title>Easy Encrypt</Title>
      </Left>
      <Right>
        <LangSwitch onClick={() => setLang(langSwitch(lang))}>{lang.type}</LangSwitch>
        <Icons
          type={themeType.darkTheme ? 'moon-fill' : 'moon'}
          marginX={4}
          marginY={0}
          size={7}
          onChange={() => setThemeType({ ...themeType, darkTheme: !themeType.darkTheme })}
        />
        <GitHub href="https://github.com/KlessitonRodrigues/easy-encrypt" target="_blank">
          <Icons type="gh-logo" size={9} />
        </GitHub>
      </Right>
    </Container>
  );
};

export default Header;
