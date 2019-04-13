import React, { Fragment, Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import MeetupItem from '../../components/MeetupItem';
import Foto from '../../assets/meetup1.jpg';

import { Container, MeetupList } from './styles';

class Dashboard extends Component {
  state = {
    enrolled: [
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },

      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },

      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },

      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },

      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
    ],

    next: [
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },

      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },

      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
    ],

    recommended: [
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },

      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },

      {
        image: Foto,
        title: 'Meetup React Native',
        members: 120,
      },
    ],
  };

  render() {
    const { enrolled, next, recommended } = this.state;

    return (
      <Fragment>
        <Header />

        <Container>
          <h3>Inscrições</h3>
          <MeetupList>
            {enrolled.map(meetup => (
              <MeetupItem key={Math.random()} meetup={meetup} />
            ))}
          </MeetupList>

          <h3>Próximos meetups</h3>
          <MeetupList>
            {next.map(meetup => (
              <MeetupItem key={Math.random()} meetup={meetup} />
            ))}
          </MeetupList>

          <h3>Recomendados</h3>
          <MeetupList>
            {recommended.map(meetup => (
              <MeetupItem key={Math.random()} meetup={meetup} />
            ))}
          </MeetupList>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Dashboard);
