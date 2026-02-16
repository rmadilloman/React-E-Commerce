import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/slices/cartSlice';
import {
  Container,
  SectionTitle,
  FormGroup,
  Label,
  Input,
  Button,
  PaymentForm,
} from './styles';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total } = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });
  const [paymentSaved, setPaymentSaved] = useState(false);

  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSavePayment = (e) => {
    e.preventDefault();
    setPaymentSaved(true);
  };

  const handleConfirmPurchase = () => {
    dispatch(clearCart());
    navigate('/post-checkout');
  };

  if (items.length === 0) {
    return <Container>Your cart is empty. Go back to shop!</Container>;
  }

  return (
    <Container>
      <SectionTitle>Shipping Address</SectionTitle>
        <FormGroup> {/* Shipping information form */}

      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        name="name" 
        value={shippingInfo.name}
        onChange={handleInputChange}
        required
      />
      <Label htmlFor="address">Address</Label>
      <Input
        id="address"
        name="address"
        value={shippingInfo.address}
        onChange={handleInputChange}
        required
      />
      <Label htmlFor="city">City</Label>
      <Input
        id="city"
        name="city"
        value={shippingInfo.city}
        onChange={handleInputChange}
        required
      />
      <Label htmlFor="zip">ZIP Code</Label>
      <Input
      id="zip"
      name="zip"
      value={shippingInfo.zip}
      onChange={handleInputChange}
      required
     />

  </FormGroup>

      <SectionTitle>Payment Method</SectionTitle>
      <PaymentForm onSubmit={handleSavePayment}> {/* Card information form*/}
        <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />
            <Label htmlFor="expiration">Expiration Date</Label>
            <Input
              id="expiration"
              placeholder="MM/YY"
              required
            />
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              placeholder="123"
              required
            />
        <Button type="submit">Save Payment Method</Button>
      </PaymentForm>

      <SectionTitle>Total: ${total.toFixed(2)}</SectionTitle>
      <Button onClick={handleConfirmPurchase} disabled={!paymentSaved}>
        Confirm Purchase
      </Button>
    </Container>
  );
};
export default Checkout;