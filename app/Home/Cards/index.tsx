import { fetchSwapiData } from '@/app/api/swapi';
import React, { useEffect, useState } from 'react';
import ShipsCard from '../ShipsCard';

export default function Cards() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSwapiData('starships');
        console.log(data);
        setShips(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <div className='cards-container'>
        {ships.map((ship, index) => (
          <ShipsCard key={index} ship={ship} />
        ))}
      </div>
    </div>
  );
}
