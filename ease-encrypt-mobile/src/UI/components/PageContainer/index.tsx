import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { defaulTheme } from '../../../styles/theme';
import Header from '../../base/Header';
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
