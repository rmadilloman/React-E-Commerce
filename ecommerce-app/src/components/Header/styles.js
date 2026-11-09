import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px 24px;
  color: white;
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
const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

const UserGreeting = styled.span`
  color: white;
  font-size: 14px;
`;

const LogoutButton = styled.button`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: rgb(240,240,240)
  }
`;

const LoginLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
export {
  HeaderWrapper,
  Logo,
  CartWrapper,
  CartCount,
  MainText,
  RightSection,
  UserGreeting,
  LogoutButton,
  LoginLink,
}