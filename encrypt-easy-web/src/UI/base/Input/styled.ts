import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.size(6)};
  `
);

export const Label = styled.label(
  ({ theme }) => css`
    font-size: ${theme.fontSize.label};
    color: ${theme.colors.text1};
    display: flex;
    align-items: center;
    gap: ${theme.size(1)};
  `
);

export const InputField = styled.input(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(2)} 0;
    background-color: transparent;
    border: transparent;
    border-bottom: 1px solid ${theme.colors.main};
    color: ${theme.colors.main};
    font-size: ${theme.fontSize.body};
  `
);
