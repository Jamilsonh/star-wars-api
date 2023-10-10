import { fetchSwapiData } from '@/app/api/swapi';
import React, { useEffect, useState } from 'react';
import ShipsCard from '../ShipsCard';
import swlogo from '../../images/swlogo.png';
import Image from 'next/image';
import { Container } from './styles';

const shipImages = {
  'CR90 corvette': '/images/CR90-corvette.png',
  'Star Destroyer': '/images/star-destroyer.png',
  'Sentinel-class landing craft': '/images/sentinel-class.png',
  'Millennium Falcon': '/images/millennium-falcon.png',
  'Y-wing': '/images/y-wing.png',
  'X-wing': '/images/x-wing.png',
  'TIE Advanced x1': '/images/tie-advanced.png',
  Executor: '/images/executor.png',
};

export default function Cards() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSwapiData('starships');

        // Remover objetos com nomes específicos
        const nomesParaRemover = ['Death Star', 'Rebel transport'];
        const filteredData = data.results.filter(
          (ship) => !nomesParaRemover.includes(ship.name)
        );

        console.log(filteredData);
        setShips(filteredData);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Star Wars Starships</h1>
      <Container>
        {ships.map((ship, index) => (
          <>
            <ShipsCard
              key={index}
              ship={ship}
              imageUrl={shipImages[ship.name]}
            />
          </>
        ))}
      </Container>
    </div>
  );
}
