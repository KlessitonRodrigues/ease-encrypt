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

export const Row = styled.label(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.size(2)};
  `
);

export const TextAreaInput = styled.textarea(
  ({ theme }) => css`
    font-family: unset;
    line-height: 1.2rem;
    outline: none;
    resize: vertical;
    padding: ${theme.size(2)};
    height: ${theme.size(40)};
    min-height: ${theme.size(30)};
    max-height: ${theme.size(120)};
    border: 2px solid ${theme.colors.text3 + '44'};
    color: ${theme.colors.text1};
    background-color: ${theme.colors.bg2};
    border-radius: ${theme.radius.small};
    font-size: ${theme.fontSize.body};
  `
);
