import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Logo = styled.img`
  height: 40px;
`;

const MainText = styled.p`
    font-size: 1.4rem;
`;

const CartWrapper = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 1.8rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
`;
export {
  HeaderWrapper,
  Logo,
  CartWrapper,
  CartCount,
  MainText
}