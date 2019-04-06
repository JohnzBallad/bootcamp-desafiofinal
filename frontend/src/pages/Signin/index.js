import React, { Component } from 'react';

import {
  Container, Form, Label, Input, Button,
} from './styles';

import Logo from '../../assets/logo.svg';

export default class Signin extends Component {
  state = {
    email: '',
    password: '',
  };

  handleFormSubmit = () => {};

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <img src={Logo} alt="Logo" />

        <Form onSubmit={this.handleFormSubmit}>
          <Label>Email</Label>
          <Input
            type="email"
            onChange={e => this.setState({ email: e.target.value })}
            value={email}
            placeholder="Digite o seu e-mail"
            placeholderTextColor="#b3b3b3"
          />

          <Label>Senha</Label>
          <Input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            value={password}
            placeholder="Sua senha secreta"
            placeholderTextColor="#b3b3b3"
          />
        </Form>

        <Button type="submit">Entrar</Button>

        <p>Criar conta grátis</p>
      </Container>
    );
  }
}
