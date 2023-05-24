import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(4)};
  `
);

export const Label = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.current.text1};
  `
);

export const InputField = styled.TextInput(
  ({ theme }) => css`
    width: 100%;
    border-bottom-width: ${theme.size(1)};
    border-bottom-color: ${theme.colors.current.main};
    color: ${theme.colors.current.text1};
  `
);
