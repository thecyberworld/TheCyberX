import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  background: #2a2a2a;
  width: 100%;
`;

export const LogoContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 0.5rem 0 0 0.5rem;
  width: 2rem;
`;

export const IconContainer = styled.div`
font-size: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
width: 10%;
`;

export const Icon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
`;