import React from 'react';

import {
  Logo, Container, Button, LeftWrapper, Person,
} from './styles';
import WhiteLogo from '../../assets/logo-white.svg';
import PersonImage from '../../assets/person.svg';

const Header = () => (
  <Container>
    <LeftWrapper>
      <Logo src={WhiteLogo} alt="logo white" />

      <Button type="button">Início</Button>

      <Button type="button">Buscar</Button>

      <Button type="button">Novo meetup</Button>
    </LeftWrapper>

    <Person>
      <img src={PersonImage} alt="Person" />
    </Person>
  </Container>
);

export default Header;
