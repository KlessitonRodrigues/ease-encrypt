import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ checked: boolean }>(
  ({ theme, checked }) => css`
    padding: ${theme.size(4)};
    margin: ${theme.size(2)} 0;
    border: 1px solid transparent;
    border-radius: ${theme.radius.medium};
    background-color: ${theme.colors.bg3};
    ${checked && `background-color: ${theme.colors.bg1}`};
    ${checked && `border-color: ${theme.colors.main}`};
  `
);

export const Title = styled.Text<{ checked: boolean }>(
  ({ theme, checked }) => css`
    font-size: ${theme.fontSize.label};
    font-weight: bold;
    color: ${theme.colors.text2};
    ${checked && `color: ${theme.colors.main}`};
  `
);

export const Description = styled.View(() => css``);

export const DescriptionItem = styled.Text(
  ({ theme }) => css`
    font-size: ${theme.fontSize.verySmall};
    color: ${theme.colors.text3};
    margin-bottom: ${theme.size(1)};
  `
);
