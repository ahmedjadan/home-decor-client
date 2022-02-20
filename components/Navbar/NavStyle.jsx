import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  height: 100px;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    top: 8rem;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.688);
    z-index: -1;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.2s;
  }

  ${({ active }) =>
    active &&
    css`
      &::before {
        opacity: 1;
        transform: scale(1);
      }
    `}
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  @media screen and (min-width: 640px) {
    height: 100%;
  }
`;

export const Navigation = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: -1;

  ${({ active }) =>
    active &&
    css`
      transform: translateY(5.4rem);
    `}
  @media screen and (min-width: 640px) {
    background: transparent;
    position: initial;
    width: initial;
    padding: initial;
    transform: none;
    z-index: initial;
    flex: 1;

    display: flex;
    justify-content: center;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const MenuLinks = styled.li`
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-family: var(--font-Pro);
    font-size: 17px;
    font-weight: 400;
    line-height: 25%;
    transition: 0.3s ease;
    text-decoration: none;

    ${({ current }) =>
      current &&
      css`
        font-weight: 600;
      `}
  }
`;

export const HumbergurMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (min-width: 640px) {
    display: none;
  }
`;

export const CartLogo = styled.div`
  position: relative;
  /* flex: 1; */
  display: flex;
  justify-content: center;
  @media screen and (min-width: 640px) {
    justify-content: flex-end;
    margin-right: 20px;
  }
  a {
    span {
      position: absolute;
      top: -10px;
      height: 30px;
      margin-left: 20px;
      width: 30px;
      border-radius: 50%;
      text-align: center;
      display: flex;
      align-items: center;
      background: ${({ theme }) => theme.colors.primary};
      justify-content: center;
      color: white;
      font-weight: 600;
    }
  }
`;

export const Logo = styled.div`
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 700;
    
    @media screen and (min-width: 640px) {
      /* flex: 1; */
      font-size: 2rem;
    }
  }
`;
