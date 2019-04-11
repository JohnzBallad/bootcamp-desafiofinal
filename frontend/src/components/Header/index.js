import React from 'react';

import { Logo, Container, Button } from './styles';
import WhiteLogo from '../../assets/logo-white.svg';

const Header = () => (
  <Container>
    <Logo src={WhiteLogo} alt="logo white" />

    <Button type="button">Início</Button>

    <Button type="button">Buscar</Button>

    <Button type="button">Novo meetup</Button>
  </Container>
);

export default Header;
