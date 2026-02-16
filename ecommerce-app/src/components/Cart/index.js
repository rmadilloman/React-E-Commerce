import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import {
  Container,
  Title,
  CartItem,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
  ItemQuantity,
  RemoveButton,
  Total,
  CheckoutButton,
  EmptyMessage,
} from './styles';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <Container>
        <Title>Your Cart</Title>
        <EmptyMessage>Your cart is empty.</EmptyMessage>
        <Link to="/">
          <CheckoutButton>Return</CheckoutButton>
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Your Cart ({items.length} items)</Title>
      {items.map((item) => (
        <CartItem key={item.id}>
          <ItemImage src={item.image} alt={item.name} />
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
          </ItemDetails>
          <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </RemoveButton>
        </CartItem>
      ))}
      <Total>Total: ${total.toFixed(2)}</Total>
      <Link to="/checkout">
        <CheckoutButton>Go to Checkout</CheckoutButton>
      </Link>
    </Container>
  );
};

export default Cart;