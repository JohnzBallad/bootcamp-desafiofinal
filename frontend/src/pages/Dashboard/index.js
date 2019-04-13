import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import MeetupItem from '../../components/MeetupItem';

import { Container, MeetupList } from './styles';

import { Creators as MeetupActions } from '../../store/ducks/meetup';

class Dashboard extends Component {
  static propTypes = {
    loadEnrolledRequest: PropTypes.func.isRequired,
    loadNotEnrolledRequest: PropTypes.func.isRequired,
    loadRecommendedRequest: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    meetup: PropTypes.shape({
      enrolled: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
      notEnrolled: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
      recommended: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const {
      loadEnrolledRequest,
      loadNotEnrolledRequest,
      history,
      loadRecommendedRequest,
    } = this.props;

    const token = localStorage.getItem('@meetapp.usertoken');

    if (!token || !token.length) {
      history.push('/');
    } else {
      loadEnrolledRequest();
      loadNotEnrolledRequest();
      loadRecommendedRequest();
    }
  }

  render() {
    const { meetup: meetups } = this.props;

    return (
      <Fragment>
        <Header />

        <Container>
          <h3>Inscrições</h3>
          <MeetupList>
            {meetups.enrolled.map(meetup => (
              <MeetupItem key={meetup.id} meetup={meetup} />
            ))}
          </MeetupList>

          <h3>Próximos meetups</h3>
          <MeetupList>
            {meetups.notEnrolled.map(meetup => (
              <MeetupItem key={meetup.id} meetup={meetup} />
            ))}
          </MeetupList>

          <h3>Recomendados</h3>
          <MeetupList>
            {meetups.recommended.map(meetup => (
              <MeetupItem key={meetup.id} meetup={meetup} />
            ))}
          </MeetupList>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetup,
  token: state.user.token,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
