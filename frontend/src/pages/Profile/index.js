/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import {
  Container, Form, Input, Button, Checkbox, Label,
} from './styles';

import { Creators as UserActions } from '../../store/ducks/user';

class Profile extends Component {
  static propTypes = {
    updateProfileRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    password: '',
    passwordConfirmation: '',
    frontend: false,
    backend: false,
    mobile: false,
    devops: false,
    gestao: false,
    marketing: false,
  };

  componentDidMount() {
    const userInfo = JSON.parse(localStorage.getItem('@meetapp.userinfo'));

    this.setState({ name: userInfo.name });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {
      frontend,
      backend,
      devops,
      mobile,
      marketing,
      gestao,
      name,
      password,
      passwordConfirmation,
    } = this.state;

    if (!this.checkPasswordMatches(password, passwordConfirmation)) {
      this.setState({ password: '', passwordConfirmation: '' });
      return toast.error('Passwords do not match', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    const { updateProfileRequest } = this.props;

    updateProfileRequest({
      name,
      password,
      preferences: {
        frontend,
        backend,
        devops,
        mobile,
        marketing,
        gestao,
      },
    });
  };

  checkPasswordMatches = (password, passwordConfirmation) => password === passwordConfirmation;

  render() {
    const {
      frontend,
      backend,
      devops,
      mobile,
      marketing,
      gestao,
      name,
      password,
      passwordConfirmation,
    } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit}>
          <Label>Nome</Label>
          <Input
            type="text"
            value={name}
            placeholder="Seu nome"
            placeholderTextColor="#FFF"
            onChange={e => this.setState({ name: e.target.value })}
          />

          <Label>Senha</Label>
          <Input
            type="password"
            value={password}
            placeholder="Sua senha secreta"
            placeholderTextColor="#b3b3b3"
            onChange={e => this.setState({ password: e.target.value })}
          />

          <Label>Confirmação de Senha</Label>
          <Input
            type="password"
            placeholder="Sua senha secreta"
            placeholderTextColor="#FFF"
            value={passwordConfirmation}
            onChange={e => this.setState({ passwordConfirmation: e.target.value })}
          />
          <div>
            <label>
              <Checkbox
                name="frontend"
                type="checkbox"
                checked={frontend}
                onChange={e => this.setState({ frontend: e.target.checked })}
              />
              Front-end
            </label>

            <label>
              <Checkbox
                name="backend"
                type="checkbox"
                checked={backend}
                onChange={e => this.setState({ backend: e.target.checked })}
              />
              Back-end
            </label>

            <label>
              <Checkbox
                name="mobile"
                type="checkbox"
                checked={mobile}
                onChange={e => this.setState({ mobile: e.target.checked })}
              />
              Mobile
            </label>

            <label>
              <Checkbox
                name="devops"
                type="checkbox"
                checked={devops}
                onChange={e => this.setState({ devops: e.target.checked })}
              />
              DevOps
            </label>

            <label>
              <Checkbox
                name="gestao"
                type="checkbox"
                checked={gestao}
                onChange={e => this.setState({ gestao: e.target.checked })}
              />
              Gestão
            </label>

            <label>
              <Checkbox
                name="marketing"
                type="checkbox"
                checked={marketing}
                onChange={e => this.setState({ marketing: e.target.checked })}
              />
              Marketing
            </label>
          </div>
          <Button type="submit">Continuar</Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
