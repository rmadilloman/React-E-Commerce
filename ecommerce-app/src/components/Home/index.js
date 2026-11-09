import React, { useEffect, useState } from 'react';
import { Container, Banner, BannerTitle, BannerSubtitle, ProductGrid } from './styles';
import ProductCard from '../ProductCard';
import API from '../../api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get('/products/');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Container><p>Loading products...</p></Container>;
  if (error) return <Container><p>{error}</p></Container>;

  return (
    <Container>
      <Banner>
        <BannerTitle>Welcome to Target Online</BannerTitle>
        <BannerSubtitle>Discover amazing deals on electronics and more!</BannerSubtitle>
      </Banner>

      <ProductGrid>
        {products.length === 0 ? (
          <p>No products available yet.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </ProductGrid>
    </Container>
  );
};

export default Home;