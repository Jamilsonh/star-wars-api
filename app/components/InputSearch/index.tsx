import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Input, InputSearchContainer } from './stylex';

export default function InputSearch() {
  return (
    <InputSearchContainer>
      <BiSearch />
      <Input placeholder='Buscar' />
    </InputSearchContainer>
  );
}
