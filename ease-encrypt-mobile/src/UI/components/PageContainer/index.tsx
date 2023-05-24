import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { defaulTheme } from '../../../styles/theme';
import { Container, Content } from './styled';

const PageContainer = (props: PropsWithChildren) => {
  return (
    <ThemeProvider theme={defaulTheme}>
      <Container>
        <Content>{props.children}</Content>
      </Container>
    </ThemeProvider>
  );
};

export default PageContainer;
