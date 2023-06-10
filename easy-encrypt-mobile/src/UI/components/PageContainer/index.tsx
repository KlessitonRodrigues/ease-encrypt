import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';
import Header from 'src/UI/base/Header';
import useGlobalContext from 'src/hooks/useGlobalContext';
import { defaultTheme, defaultThemeDark } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components/native';

import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  const [global] = useGlobalContext();

  return (
    <ThemeProvider theme={global.darkTheme ? defaultThemeDark : defaultTheme}>
      <Container>
        <StatusBar style="inverted" />
        <Header />
        <Content>{props.children}</Content>
      </Container>
    </ThemeProvider>
  );
};

export default PageContainer;
