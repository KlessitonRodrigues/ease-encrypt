import styled, { css } from 'styled-components/native';

export const Container = styled.View(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(8)} ${theme.size(4)};
    padding-top: ${theme.size(25)};
    background-color: ${theme.colors.mainBg};
  `
);

export const Title = styled.Text(
  ({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.h2};
  `
);

export const Row = styled.View(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${theme.size(4)};
  `
);
