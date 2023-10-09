import React, { useState, useEffect } from 'react';
import { Button, Container, FilterContainer, GridSelector } from './styles';
import { BiFilter, BiSolidGrid, BiSolidGridAlt } from 'react-icons/bi';
import InputSearch from '@/app/components/InputSearch';
import GenderSelection from '../SelectList';
import { fetchSwapiData } from '@/app/api/swapi';

export default function MenuBar() {
  return (
    <Container>
      <FilterContainer>
        <BiFilter />
        Filtros
      </FilterContainer>
      <InputSearch />
      <GenderSelection />
      <GridSelector>
        <Button>
          <BiSolidGridAlt />
        </Button>
        <Button>
          <BiSolidGrid />
        </Button>
      </GridSelector>
    </Container>
  );
}
