import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    max-width: ${theme.size(450)};
    margin: auto;
  `
);

export const Content = styled.div(({ theme }) => css``);
