import React from 'react';
import { Container } from './styles';
import Image from 'next/image';

export default function ShipsCard({ ship, imageUrl }) {
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

      <Image
        className='image'
        src={imageUrl}
        width={250}
        height={250}
        alt={''}
      />
      <p>
        <strong>Modelo:</strong> {model}
      </p>
      <p>
        <strong>Fabricante:</strong> {manufacturer}
      </p>
      <p>
        <strong>Custo em Créditos:</strong> {cost_in_credits}
      </p>
    </Container>
  );
}
