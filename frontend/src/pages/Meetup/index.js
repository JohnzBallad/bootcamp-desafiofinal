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

  state = {};

  handleSubscribe = () => {
    // console.log(this.props);

    const {
      subscribeRequest,
      location: {
        state: { meetup },
      },
    } = this.props;

    subscribeRequest(meetup);
  };

  render() {
    const {
      location: {
        state: { meetup },
      },
    } = this.props;
    return (
      <Container>
        <img src={`http://localhost:3001/files/${meetup.cover}`} alt="meetup cover" />

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
