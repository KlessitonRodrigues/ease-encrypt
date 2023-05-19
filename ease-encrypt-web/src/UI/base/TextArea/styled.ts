import styled, { css } from "styled-components";

export const Container = styled.div(
  (props) => css`
    width: 100%;
    margin-bottom: ${props.theme.size(2)};
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
    background-color: ${theme.colors.current.bg1};
    border-radius: ${theme.border.radius.small};
    padding: ${theme.size(2)};
    height: ${theme.size(25)};
    min-height: ${theme.size(25)};
    max-height: ${theme.size(120)};
    border: ${theme.border.type.large};
    color: ${theme.colors.current.text1};
  `
);
