import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';
import SplideUp from 'src/UI/base/Animations/splideUp';
import Header from 'src/UI/base/Header';
import { defaultTheme, defaultThemeDark } from 'src/styles/theme';
import { isDarkMode } from 'src/utils/native';
import { ThemeProvider } from 'styled-components/native';

import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  return (
    <ThemeProvider theme={isDarkMode() ? defaultThemeDark : defaultTheme}>
      <Container>
        <StatusBar style="inverted" />
        <Header />
        <Content>
          <SplideUp>{props.children}</SplideUp>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default PageContainer;
