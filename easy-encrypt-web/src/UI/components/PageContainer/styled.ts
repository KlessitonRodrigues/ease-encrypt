import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${theme.size(450)};
    margin: auto;
    overflow-y: auto;
    background-color: ${theme.colors.current.bg1};
  `
);

export const Content = styled.div(() => css``);
