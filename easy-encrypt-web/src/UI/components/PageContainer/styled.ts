import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${theme.size(450)};
    margin: 0 auto;
    overflow-y: auto;
    background-color: ${theme.colors.bg1};
  `
);

export const Content = styled.div(
  ({ theme }) => css`
    padding: ${theme.size(4)};
  `
);
