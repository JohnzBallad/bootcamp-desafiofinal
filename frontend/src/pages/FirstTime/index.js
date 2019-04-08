import React, { Component } from 'react';

import {
  Container, Form, Input, Wrapper, Button,
} from './styles';

export default class FirstTime extends Component {
  state = {
    isFrontend: false,
    isBackend: false,
    isMobile: false,
    isDevops: false,
    isGestao: false,
    isMarketing: false,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      isFrontend, isBackend, isDevops, isMarketing, isMobile, isGestao,
    } = this.state;
    return (
      <Container>
        <Wrapper>
          <h2>Olá, Jonathan</h2>

          <p>
            Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
            selecionarmos os melhores meetups pra você:
          </p>

          <h3>Preferências</h3>

          <Form onSubmit={this.handleFormSubmit}>
            <label>
              <Input
                name="isFrontend"
                type="checkbox"
                checked={isFrontend}
                onChange={e => this.setState({ isFrontend: e.target.checked })}
              />
              Front-end
            </label>

            <label>
              <Input
                name="isBackend"
                type="checkbox"
                checked={isBackend}
                onChange={e => this.setState({ isBackend: e.target.checked })}
              />
              Back-end
            </label>

            <label>
              <Input
                name="isMobile"
                type="checkbox"
                checked={isMobile}
                onChange={e => this.setState({ isMobile: e.target.checked })}
              />
              Mobile
            </label>

            <label>
              <Input
                name="isDevops"
                type="checkbox"
                checked={isDevops}
                onChange={e => this.setState({ isDevops: e.target.checked })}
              />
              DevOps
            </label>

            <label>
              <Input
                name="isGestao"
                type="checkbox"
                checked={isGestao}
                onChange={e => this.setState({ isGestao: e.target.checked })}
              />
              Gestão
            </label>

            <label>
              <Input
                name="isMarketing"
                type="checkbox"
                checked={isMarketing}
                onChange={e => this.setState({ isMarketing: e.target.checked })}
              />
              Marketing
            </label>

            <Button type="submit">Continuar</Button>
          </Form>
        </Wrapper>
      </Container>
    );
  }
}
