import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container, Button, MeetupInfo, Counter, Description, Location, When,
} from './styles';
import { Creators as MeetupActions } from '../../store/ducks/meetup';

class Meetup extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        meetup: PropTypes.shape({
          cover: PropTypes.string,
          title: PropTypes.string,
          subscribers: PropTypes.number,
        }).isRequired,
      }),
    }).isRequired,
    subscribeRequest: PropTypes.func.isRequired,
  };

  state = {
    meetup: {},
  };

  componentWillMount() {
    const { location, history } = this.props;

    // console.log(this.props);

    if (!location.state) {
      history.push('/dashboard');
    } else {
      this.setState({
        meetup: location.state.meetup,
      });
    }
  }

  handleSubscribe = () => {
    // console.log(this.props);

    const { subscribeRequest } = this.props;

    const { meetup } = this.state;

    subscribeRequest(meetup);
  };

  render() {
    const { meetup } = this.state;
    return (
      <Container>
        {/*
          Motivo pelo qual existe a condição abaixo:

          Quando o usuário tentar alterar a URL do navegador,
          por exemplo: colocando um meetup id que não exista,
          meetup.cover não existirá, entretanto o GET para exibir a imagem
          irá ocorrer e isso é chato.
          Então eu troco a imagem por um p, que o usuário nem irá ver
          (pq ele será redirecionado para /dashboard), só pra evitar o GET ao servidor.

        */}

        {meetup.cover ? (
          <img src={`http://localhost:3001/files/${meetup.cover}`} alt="meetup cover" />
        ) : (
          <p>Não há uma imagem</p>
        )}

        <MeetupInfo>
          <h3>{meetup.title}</h3>
          <Counter>{meetup.subscribers} membros</Counter>

          <Description>{meetup.description}</Description>

          <Location>Realizado em:</Location>
          <p>{meetup.location}</p>

          <When>Horário:</When>
          <p>
            {`${moment(meetup.when).format('DD/MM/YY')} às ${moment(meetup.when).format('HH:mm')}`}
          </p>

          <Button type="button" onClick={this.handleSubscribe}>
            Inscreva-se
          </Button>
        </MeetupInfo>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetup,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
