import useLangContext from 'src/hooks/useLangContext';
import useThemeTypeContext from 'src/hooks/useThemeTypeContext';

import Icons from '../../base/Icons';
import { langSwitch } from './service/langSwitch';
import { Container, LangSwitch, Row, Title } from './styled';

const Header = () => {
  const [lang, setLang] = useLangContext();
  const [themeType, setThemeType] = useThemeTypeContext();

  return (
    <Container>
      <Row>
        <Icons type="lock" size={26} />
        <Title>Easy Encrypt</Title>
      </Row>
      <Row>
        <LangSwitch onPress={() => setLang(langSwitch(lang))}>{lang.type}</LangSwitch>
        <Icons
          type={themeType.darkTheme ? 'moon-fill' : 'moon'}
          size={26}
          onChange={() => setThemeType({ ...themeType, darkTheme: !themeType.darkTheme })}
        />
      </Row>
    </Container>
  );
};

export default Header;
