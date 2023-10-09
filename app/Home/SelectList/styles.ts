import styled from 'styled-components';

export const CustomSelect = styled.div`
  position: relative;
  width: 200px; /* ou o tamanho desejado para o seu select personalizado */
`;

export const Select = styled.select`
  appearance: none;
  background-color: transparent;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

export const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #333; /* ou a cor desejada para a seta */
  pointer-events: none;
`;
export const Option = styled.option`
  background-color: black;
  color: white;
`;
