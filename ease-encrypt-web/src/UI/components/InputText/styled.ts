import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(300)};
    margin: ${theme.size(6)} auto;
    padding: ${theme.size(4)};
  `
);
