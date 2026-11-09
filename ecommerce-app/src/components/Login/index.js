import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/authSlice';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ username, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate('/');
    }
  };

  return (
    <Container>
      <LoginText>Login</LoginText>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Logging in....' : 'Login'}
        </Button>
        {error && (
          <ErrorMessage>
            {typeof error === 'string' ? error : 'Invalid username or password'}
          </ErrorMessage>
        )}
      </Form>
      <LinkText>
        Don't have an account? <Link to="/register">Register here</Link>
      </LinkText>
    </Container>
  );
};

export default Login;