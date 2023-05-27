import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ color: ButtonProps['color'] }>(
  ({ theme, color }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    gap: ${theme.size(2)};
    height: ${theme.size(20)};
    min-width: ${theme.size(60)};
    margin: ${theme.size(4)} 0;
    padding: ${theme.size(4)} ${theme.size(6)};
    background-color: ${theme.colors.mainBg};
    border-radius: ${theme.borderRadius.medium};

    ${() => {
      switch (color) {
        case 'yellow':
          return `background-color: ${theme.colors.yellow};`;
        case 'red':
          return `background-color: ${theme.colors.red};`;
        case 'green':
          return `background-color: ${theme.colors.green};`;
        case 'transparent':
          return css`
            background-color: transparent;
            border-width: 1.5px;
            border-color: ${theme.colors.text3};
          `;
      }
    }}
  `
);

export const Icon = styled.View(() => css``);

export const Label = styled.Text<{ color: ButtonProps['color'] }>(
  ({ theme, color }) => css`
    padding-right: ${theme.size(2)};
    text-transform: capitalize;
    font-family: monospace;
    font-weight: bold;
    text-align: center;
    font-size: ${theme.fontSize.label};
    color: ${theme.colors.white};
    ${color === 'transparent' && `color: ${theme.colors.text3};`}
  `
);
