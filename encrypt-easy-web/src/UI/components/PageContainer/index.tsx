import { PropsWithChildren } from 'react';
import Header from 'src/UI/components/Header';
import useThemeTypeContext from 'src/hooks/useThemeTypeContext';
import GlobalCSS from 'src/styles/globalCSS';
import { defaultTheme, defaultThemeDark } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  const [themeType] = useThemeTypeContext();

  return (
    <ThemeProvider theme={themeType.darkTheme ? defaultThemeDark : defaultTheme}>
      <GlobalCSS />
      <Container>
        <Header />
        <Content>{props.children}</Content>
      </Container>
    </ThemeProvider>
  );
};

export default PageContainer;
