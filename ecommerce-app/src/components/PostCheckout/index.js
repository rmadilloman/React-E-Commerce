import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Message, Button } from './styles';

const PostCheckout = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Purchase Successful!</Title>
      <Message>Thank you for shopping with Target.</Message>
      <Button onClick={() => navigate('/')}>Continue Shopping</Button>
    </Container>
  );
};

export default PostCheckout;