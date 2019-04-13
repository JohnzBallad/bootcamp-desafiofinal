import React from 'react';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';

import {
  Logo, Container, Button, LeftWrapper, Person,
} from './styles';
import WhiteLogo from '../../assets/logo-white.svg';

const Header = () => (
  <Container>
    <LeftWrapper>
      <Logo src={WhiteLogo} alt="logo white" />

      <Button type="button">Início</Button>

      <Button type="button">Buscar</Button>

      <Button type="button">Novo meetup</Button>
    </LeftWrapper>

    <Person>
      <PersonIcon />
    </Person>
  </Container>
);

export default Header;
