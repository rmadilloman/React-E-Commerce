import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Form,
  Input,
  Button,
  SuccessMessage,
  LinkText,
} from './styles';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ username, password }));  // Dispatch register
    setSuccess(true);
    setTimeout(() => navigate('/'), 2000);  // Redirect after success
  };

  return (
    <Container>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
        {success && <SuccessMessage>Account created! Redirecting to home...</SuccessMessage>}
      </Form>
      <LinkText>
        Already have an account? <Link to="/login">Login</Link>
      </LinkText>
    </Container>
  );
};

export default Register;