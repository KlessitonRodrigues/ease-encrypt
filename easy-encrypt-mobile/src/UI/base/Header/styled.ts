import styled, { css } from 'styled-components/native';

export const Container = styled.View(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(6)};
    padding-top: ${theme.size(25)};
    background-color: ${theme.colors.mainBg};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `
);

export const Title = styled.Text(
  ({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.h2};
  `
);

export const Row = styled.View(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.size(4)};
  `
);
