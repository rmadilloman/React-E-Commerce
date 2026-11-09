import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Form,
  Input,
  Button,
  LinkText,
} from './styles';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser({ username, email, password }));
    if (registerUser.fulfilled.match(result)) {
      navigate('/');
    }
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
        <Button type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Register'}
        </Button>
        {error && (
          <p style={{ color: 'red', marginTop: '10px' }}>
          {typeof error === 'string' ? error : 'Registration failed'}
        </p>
)}
      </Form>
      <LinkText>
        Already have an account? <Link to="/login">Login</Link>
      </LinkText>
    </Container>
  );
};

export default Register;