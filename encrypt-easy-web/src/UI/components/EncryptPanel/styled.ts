import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(300)};
    margin: ${theme.size(2)} auto;
  `
);

export const InputText = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.size(6)};
  `
);

export const InputPassword = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.size(6)};
  `
);

export const ResultText = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.size(6)};
  `
);

export const Options = styled.div(
  ({ theme }) => css`
    display: flex;
    margin-bottom: ${theme.size(2)};
  `
);

export const OptionsTitle = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSize.label};
  `
);
