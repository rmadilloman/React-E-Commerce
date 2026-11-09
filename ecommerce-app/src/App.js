import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PostCheckout from './components/PostCheckout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/slices/authSlice';


const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log('Authenticated:', isAuthenticated); // debug

  useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(loadUser());
  }
}, [dispatch]);

  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" /> : <Login />
        } />
        <Route path="/register" element={
          isAuthenticated ? <Navigate to="/" /> : <Register />
        } />
        <Route path="/" element={
          isAuthenticated ? <Home /> : <Navigate to="/login" />
        } />
        <Route path="/cart" element={
          isAuthenticated ? <Cart /> : <Navigate to="/login" />
        } />
        <Route path="/checkout" element={
          isAuthenticated ? <Checkout /> : <Navigate to="/login" />
        } />
        <Route path="/post-checkout" element={
          isAuthenticated ? <PostCheckout /> : <Navigate to="/login" />
        } />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;