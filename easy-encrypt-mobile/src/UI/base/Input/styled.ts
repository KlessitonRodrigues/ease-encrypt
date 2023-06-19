import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ type: InputProps['type'] }>(
  ({ theme, type }) => css`
    width: 100%;
    margin-bottom: ${theme.size(4)};
    ${type === 'textArea' && 'flex: 1;'}
  `
);

export const Label = styled.Text(
  ({ theme }) => css`
    width: 100%;
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.label};
    text-transform: capitalize;
    margin-bottom: ${theme.size(2)};
  `
);

export const InputField = styled.TextInput<{ type: InputProps['type'] }>(
  ({ theme, type }) => css`
    width: 100%;
    max-height: ${theme.size(50)};
    padding: ${theme.size(4)};
    font-size: ${theme.fontSize.body};
    font-weight: bold;
    color: ${theme.colors.text2};
    background-color: ${theme.colors.bg3};
    border-radius: ${theme.radius.medium};

    ${() => {
      switch (type) {
        case 'textArea':
          return css`
            flex: 1;
            vertical-align: top;
            max-height: 100%;
          `;
      }
    }}
  `
);
