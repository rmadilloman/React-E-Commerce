import React from 'react';
import { Container, Banner, BannerTitle, BannerSubtitle, ProductGrid } from './styles';
import ProductCard from '../ProductCard';

const mockProducts = [
  { id: 1, name: 'Wireless Headphones', price: 59.99, image: 'https://m.media-amazon.com/images/I/61BF4WydI9L._AC_UF1000,1000_QL80_.jpg' },
  { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://m.media-amazon.com/images/I/7161CULzh+L.jpg' },
  { id: 3, name: 'Bluetooth Speaker', price: 39.99, image: 'https://m.media-amazon.com/images/I/718yxonHN8L.jpg' },
  { id: 4, name: 'Gaming Mouse', price: 49.99, image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UF894,1000_QL80_.jpg' },
  { id: 5, name: 'Mechanical Keyboard', price: 89.99, image: 'https://m.media-amazon.com/images/I/71g6wzBOsvL.jpg' },
  { id: 6, name: 'Portable Charger', price: 29.99, image: 'https://m.media-amazon.com/images/I/71NVBNrF1pL._AC_UF894,1000_QL80_.jpg' },
  { id: 7, name: 'Motion Detector', price: 69.99, image: 'https://m.media-amazon.com/images/I/619ZlF++SqL.jpg' },
  { id: 8, name: 'Earbuds', price: 99.99, image: 'https://m.media-amazon.com/images/I/513OSdW4elL.jpg' },
  { id: 9, name: 'Mouse Pad', price: 19.99, image: 'https://m.media-amazon.com/images/I/61CVANF72PL.jpg' },
  { id: 10, name: 'USB-C Hub', price: 24.99, image: 'https://m.media-amazon.com/images/I/61Nb935ZpsL.jpg' },
];
const Home = () => {
  return (
    <Container>
      <Banner>
        <BannerTitle>Welcome to Target Online</BannerTitle>
        <BannerSubtitle>Discover amazing deals on electronics and more!</BannerSubtitle>
      </Banner>
      <ProductGrid>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Container>
  );
};

export default Home;