import styled from 'styled-components';

export const InputSearchContainer = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background-color: transparent;
  border-radius: 5px;

  /* Altera a cor de fundo quando qualquer elemento filho está focado */
  &:focus-within {
    opacity: 0.8; /* Altere para a cor desejada */
  }
`;

export const Input = styled.input`
  border: none;
  padding: 2px;
  background-color: transparent;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  width: 200px;

  ::placeholder {
    /* Define a cor do texto do placeholder como transparente */
    color: transparent;
  }

  /* Quando o input está focado, redefine a cor do texto do placeholder para visível */
  :focus::placeholder {
    color: initial; /* Ou a cor desejada para o placeholder */
  }
`;
