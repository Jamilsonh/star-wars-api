import React from 'react';
import { Container, Title } from './styles';
import MenuBar from './MenuBar';
import Cards from './Cards';

function HomePage() {
  return (
    <Container>
      <Title>Descubra NFTS</Title>
      <MenuBar />
      <Cards />
    </Container>
  );
}

export default HomePage;
