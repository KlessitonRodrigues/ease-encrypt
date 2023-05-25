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
    color: ${theme.colors.main};
    font-size: ${theme.fontSize.label};
    text-transform: capitalize;
  `
);
