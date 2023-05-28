import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.size(2)} ${theme.size(6)};
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.medium};
  `
);

export const Left = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
  `
);

export const Right = styled.div(
  () => css`
    display: flex;
    align-items: center;
  `
);

export const Icon = styled.div(
  ({ theme }) => css`
    margin-top: ${theme.size(1)};
    font-size: ${theme.size(10)};
  `
);

export const Title = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSize.h1};
  `
);

export const GitHubIcon = styled.div(
  ({ theme }) => css`
    margin-top: ${theme.size(1)};
    font-size: ${theme.size(11)};
  `
);
