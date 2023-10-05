'use client';
import React from 'react';
import {
  ButtonConnect,
  CenterHeader,
  Container,
  DividerContainer,
  InputContainer,
  LeftHeader,
  MenuContainer,
  RightHeader,
} from './styles';

import InputSearch from './InputSearch';
import Image from 'next/image';

import logo from '../images/swlogo.png';
import { Divider } from '@mui/material';

function Header() {
  const dividerStyle = {
    width: '1.5px', // Defina a altura desejada aqui
    backgroundColor: '#31343b',
    height: '35px',
  };
  return (
    <>
      <Container>
        <LeftHeader>
          <Image src={logo} width={230} alt={''} layout='responsive' />
        </LeftHeader>
        <DividerContainer>
          <Divider
            orientation='vertical'
            flexItem
            style={dividerStyle}
            textAlign='center'
          />
        </DividerContainer>

        <CenterHeader>
          <MenuContainer>
            <div>Home</div>
            <div>Descubra</div>
          </MenuContainer>
          <InputContainer>
            <InputSearch />
          </InputContainer>
        </CenterHeader>
        <RightHeader>
          <ButtonConnect>Conectar Carteira</ButtonConnect>
        </RightHeader>
      </Container>
    </>
  );
}

export default Header;
