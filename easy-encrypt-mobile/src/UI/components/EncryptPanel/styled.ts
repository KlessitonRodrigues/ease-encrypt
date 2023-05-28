import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View(
  () => css`
    width: 100%;
    flex: 1;
  `
);

export const Row = styled.View(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${theme.size(4)};
    margin-bottom: ${theme.size(2)};
  `
);
