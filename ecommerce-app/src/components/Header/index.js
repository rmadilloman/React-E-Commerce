import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, CartWrapper, CartCount, MainText } from './styles';
import targetLogo from '../../icons/target.svg';
import cartIcon from '../../icons/shopping-cart.svg';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderWrapper>
        <Link to="/">
            <Logo src={targetLogo} alt="Target Logo" />
        </Link>
        <MainText>
            Target Store
        </MainText>
        <Link to="/cart">
            <CartWrapper>
                <Logo src={cartIcon} alt="CartIcon" />
            {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
            </CartWrapper>
        </Link>
    </HeaderWrapper>
  );
};

export default Header;