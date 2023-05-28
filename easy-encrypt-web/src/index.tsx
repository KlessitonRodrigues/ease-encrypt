import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
/// import Router from 'src/UI/router';
import { ActionProvider } from 'src/hooks/useActionDispatch';
import { GlobalProvider } from 'src/hooks/useGlobalContext';
import { ThemeProvider } from 'styled-components';

import HomePage from './UI/pages/home';
import GlobalCSS from './styles/globalCSS';
import { defaultTheme } from './styles/theme';

const App = () => (
  <GlobalProvider>
    <ActionProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalCSS />
          <HomePage />
        </ThemeProvider>
      </BrowserRouter>
    </ActionProvider>
  </GlobalProvider>
);

reactDOM.render(<App />, document.getElementById('root'));
