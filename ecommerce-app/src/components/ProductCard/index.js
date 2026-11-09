import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { Card, Image, Name, Price, AddButton } from './styles';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Name>{product.name}</Name>
      <Price>${Number(product.price).toFixed(2)}</Price>
      <AddButton onClick={handleAdd}>Add to Cart</AddButton>
    </Card>
  );
};

export default ProductCard;