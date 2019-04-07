import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Form, Label, Input, Button,
} from './styles';

import { Creators as UserActions } from '../../store/ducks/user';

import Logo from '../../assets/logo.svg';

class Signin extends Component {
  static propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { userLoginRequest } = this.props;

    userLoginRequest({ email, password });
  };

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

          <Button type="submit">Entrar</Button>
        </Form>

        <p>Criar conta grátis</p>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
