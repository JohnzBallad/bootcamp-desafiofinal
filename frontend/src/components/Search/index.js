import React from 'react';

import { Container, Input, Icon } from './styles';

const Search = () => (
  <Container>
    <Icon />
    <Input type="text" placeholder="Buscar meetups" placeholderTextColor="#FFF" />
  </Container>
);

export default Search;
