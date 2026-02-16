import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import {
  LoginText,
  Container,
  Form,
  Input,
  Button,
  ErrorMessage,
  LinkText,
} from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'admin') { // current login credentials
      dispatch(login({ username, password }));
      navigate('/');  // Redirect to home on success
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container>
      <LoginText>Login</LoginText>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username (user)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password (admin)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
      <LinkText>
        Don't have an account? <Link to="/register">Register here</Link>
      </LinkText>
    </Container>
  );
};

export default Login;