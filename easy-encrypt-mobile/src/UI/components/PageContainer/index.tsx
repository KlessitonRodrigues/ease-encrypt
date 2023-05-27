import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';
import Header from 'src/UI/base/Header';
import { defaulTheme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components/native';

import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  return (
    <ThemeProvider theme={defaulTheme}>
      <Container>
        <StatusBar style="inverted" />
        <Header />
        <Content>{props.children}</Content>
      </Container>
    </ThemeProvider>
  );
};

export default PageContainer;
