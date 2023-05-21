import styled, { css } from 'styled-components';

export const Container = styled.button<{
  variant: ButtonProps['variant'];
  color: ButtonProps['color'];
}>(
  ({ theme, variant, color }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.size(0.5)};
    min-height: ${theme.size(10)};
    min-width: ${theme.size(28)};
    padding: 0 ${theme.size(3)};
    margin-top: ${theme.size(2)};
    margin-right: ${theme.size(4)};
    border-radius: ${theme.borderRadius.small};
    transition: box-shadow 0.2s;
    user-select: none;
    border: none;
    box-shadow: none;

    ${() => {
      switch (variant) {
        case 'solid':
          return css`
            background-color: ${theme.colors.current.mainBg};
            color: ${theme.colors.white};
            box-shadow: ${theme.shadow.low};
            &:hover {
              box-shadow: ${theme.shadow.medium};
            }
          `;
        case 'outline':
          return css`
            color: ${theme.colors.current.text2};
            border: 1px solid ${theme.colors.gray};
            background-color: transparent;
            box-shadow: none;
            &:hover {
              box-shadow: ${theme.shadow.low};
            }
          `;
      }
    }}

    ${() => {
      switch (color) {
        case 'red':
          return `background-color: ${theme.colors.red};`;
        case 'yellow':
          return `background-color: ${theme.colors.yellow};`;
        case 'green':
          return `background-color: ${theme.colors.green};`;
      }
    }}
  `
);

export const Label = styled.span(
  ({ theme }) => css`
    padding: ${theme.size(0.5)} ${theme.size(2)};
    padding-top: ${theme.size(1)};
    font-size: ${theme.fontSize.label};
    font-weight: bold;
    font-family: monospace;
  `
);

export const Icon = styled.div(
  ({ theme }) => css`
    display: flex;
    font-size: ${theme.size(5)};
  `
);
