import React from 'react';
import { Container } from './styles';

export default function ShipsCard({ ship }) {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class,
  } = ship;

  return (
    <Container>
      <h2>{name}</h2>
      <p>
        <strong>Modelo:</strong> {model}
      </p>
      <p>
        <strong>Fabricante:</strong> {manufacturer}
      </p>
      <p>
        <strong>Custo em Créditos:</strong> {cost_in_credits}
      </p>
      {/* Adicione mais informações conforme necessário */}
    </Container>
  );
}
