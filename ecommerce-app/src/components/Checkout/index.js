import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/slices/cartSlice';
import API from '../../api';
import {
  Container,
  SectionTitle,
  FormGroup,
  Label,
  Input,
  Button,
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
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleConfirmPurchase = async () => {
    setLoading(true);
    setError(null);

    try {
      // Prepare the items for the backend
      const orderItems = items.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      }));

      // Send the order to Django
      await API.post('/orders/', {
        items: orderItems,
      });

      // Clear cart and go to success page
      dispatch(clearCart());
      navigate('/post-checkout');
    } catch (err) {
      console.error(err);
      setError('Failed to create order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return <Container>Your cart is empty. Go back to shop!</Container>;
  }

  return (
    <Container>
      <SectionTitle>Shipping Address</SectionTitle>
      <FormGroup>
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
      
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" required />
        <Label htmlFor="expiration">Expiration Date</Label>
        <Input id="expiration" placeholder="MM/YY" required />
        <Label htmlFor="cvv">CVV</Label>
        <Input id="cvv" placeholder="123" required />
        
      

      <SectionTitle>Total: ${Number(total).toFixed(2)}</SectionTitle>

      {error && (
        <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>
      )}

      <Button
        onClick={handleConfirmPurchase}
      >
        {loading ? 'Processing...' : 'Confirm Purchase'}
      </Button>
    </Container>
  );
};

export default Checkout;