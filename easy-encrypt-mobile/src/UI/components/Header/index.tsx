import useGlobalContext from 'src/hooks/useGlobalContext';
import useLangContext from 'src/hooks/useLangContext';

import Icons from '../../base/Icons';
import { langSwitch } from './service/langSwitch';
import { Container, LangSwitch, Row, Title } from './styled';

const Header = () => {
  const [global, setGlobal] = useGlobalContext();
  const [lang, setLang] = useLangContext();

  return (
    <Container>
      <Row>
        <Icons type="lock" size={26} />
        <Title>Easy Encrypt</Title>
      </Row>
      <Row>
        <LangSwitch onPress={() => setLang(langSwitch(lang))}>{lang.type}</LangSwitch>
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
