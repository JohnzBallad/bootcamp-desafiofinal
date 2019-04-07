import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Form, Label, Input, Button,
} from './styles';

import { Creators as UserActions } from '../../store/ducks/user';

import Logo from '../../assets/logo.svg';

class Signup extends Component {
  static propTypes = {
    userCreateRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { email, password, name } = this.state;
    const { userCreateRequest } = this.props;

    userCreateRequest({ name, email, password });
  };

  render() {
    const { email, password, name } = this.state;

    return (
      <Container>
        <img src={Logo} alt="Logo" />

        <Form onSubmit={this.handleFormSubmit}>
          <Label>Nome</Label>
          <Input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            value={name}
            placeholder="Digite o seu nome"
            placeholderTextColor="#b3b3b3"
          />

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

          <Button type="submit">Criar conta</Button>
        </Form>

        <Link to="/">Já tenho conta</Link>
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
)(Signup);
