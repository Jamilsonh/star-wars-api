import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid white;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const FilterContainer = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background-color: transparent;
  border-radius: 5px;
  width: 100px;

  /* Altera a cor de fundo quando qualquer elemento filho está focado */
  &:focus-within {
    opacity: 0.8; /* Altere para a cor desejada */
  }
`;

export const SelectContainer = styled.div``;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const GridSelector = styled.div`
  display: flex;
  width: 70px;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
`;
