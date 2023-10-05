import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1c1e23;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  @media (max-width: 768px) {
    padding: 0 2%;
  }
`;

export const RightHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const DividerContainer = styled.div`
  margin: 20px;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const CenterHeader = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  height: 35px;
`;

export const ButtonConnect = styled.button`
  background-color: #f2ae0a;
  color: #000000;
  padding: 15px 30px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;
