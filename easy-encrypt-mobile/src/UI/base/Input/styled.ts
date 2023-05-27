import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View(
  ({ theme }) => css`
    width: 100%;
    margin: ${theme.size(2)} 0;
  `
);

export const Label = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.main};
    font-size: ${theme.fontSize.label};
    text-transform: capitalize;
  `
);

export const InputField = styled.TextInput(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(4)};
    margin-top: ${theme.size(2)};
    font-size: ${theme.fontSize.body};
    color: ${theme.colors.text1};
    background-color: ${theme.colors.bg2};
    border-radius: ${theme.size(2)};
  `
);
