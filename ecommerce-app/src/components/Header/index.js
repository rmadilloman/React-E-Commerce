import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice';
import {
  HeaderWrapper,
  Logo,
  CartWrapper,
  CartCount,
  MainText,
  RightSection,
  UserGreeting,
  LogoutButton,
  LoginLink,
} from './styles';
import targetLogo from '../../icons/target.svg';
import cartIcon from '../../icons/shopping-cart.svg';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
  <HeaderWrapper>
    {/* left section */}
    <div>
      <Link to="/">
        <Logo src={targetLogo} alt="Target Logo" />
      </Link>
    </div>

    {/* center */}
    <MainText>Target Store</MainText>

    {/* right section */}
    <RightSection>
      {isAuthenticated && (
        <UserGreeting>Hello, {user?.username}</UserGreeting>
      )}

      <Link to="/cart">
        <CartWrapper>
          <Logo src={cartIcon} alt="CartIcon" />
          {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
        </CartWrapper>
      </Link>

      {isAuthenticated ? (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      ) : (
        <LoginLink to="/login">Login</LoginLink>
      )}
    </RightSection>
  </HeaderWrapper>
);
};

export default Header;