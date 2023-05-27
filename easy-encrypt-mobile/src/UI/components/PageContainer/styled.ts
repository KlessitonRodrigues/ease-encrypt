import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View(
  () => css`
    flex: 1;
    width: 100%;
  `
);

export const Content = styled.View(
  ({ theme }) => css`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: ${theme.size(4)};
    background-color: ${theme.colors.bg1};
  `
);
