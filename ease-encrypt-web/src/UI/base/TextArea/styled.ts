import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.size(2)};
  `
);

export const TextAreaLabel = styled.label(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fontSize.label};
    gap: ${theme.size(2)};
    position: relative;
  `
);

export const TextAreaInput = styled.textarea(
  ({ theme }) => css`
    font-family: unset;
    line-height: 1.2rem;
    outline: none;
    resize: vertical;
    padding: ${theme.size(2)};
    height: ${theme.size(25)};
    min-height: ${theme.size(25)};
    max-height: ${theme.size(120)};
    border: ${theme.bordertype.large};
    color: ${theme.colors.current.text1};
    background-color: ${theme.colors.current.bg2};
    border-radius: ${theme.borderRadius.small};
  `
);
