import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 400px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  .image {
    /* Configurações para a imagem dentro do contêiner */

    /* Adicionar efeito de transição para uma animação suave do zoom */
    transition: transform 0.5s ease-in-out;

    /* Quando o mouse estiver sobre o container */
    &:hover {
      transform: scale(1.3); /* Aumenta o tamanho da imagem em 30% */
      cursor: pointer;
    }
  }
`;
