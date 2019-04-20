import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MeetupItem from '../../components/MeetupItem';
import Search from '../../components/Search';

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
    visible: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.loadStuffs();
  }

  loadStuffs = () => {
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
  };

  renderNotEnrolled = () => {
    const { meetup: meetups } = this.props;
    return meetups.notEnrolled.map(meetup => <MeetupItem key={meetup.id} meetup={meetup} />);
  };

  renderRecommended = () => {
    const { meetup: meetups } = this.props;
    return meetups.recommended.map(meetup => <MeetupItem key={meetup.id} meetup={meetup} />);
  };

  render() {
    const { meetup: meetups, visible } = this.props;

    return (
      <Container>
        {visible ? <Search /> : null}

        <h3>Inscrições</h3>
        <MeetupList>
          {meetups.enrolled.map(meetup => (
            <MeetupItem key={meetup.id} meetup={meetup} />
          ))}
        </MeetupList>

        <h3>Próximos meetups</h3>
        <MeetupList>
          {/* {meetups.notEnrolled.map(meetup => (
            <MeetupItem key={meetup.id} meetup={meetup} />
          ))} */}
          {!meetups.notEnrolled.length ? (
            <p>Não está rolando nenhum meetup por agora... :(</p>
          ) : (
            this.renderNotEnrolled()
          )}
        </MeetupList>

        <h3>Recomendados</h3>
        <MeetupList>
          {/* {meetups.recommended.map(meetup => (
            <MeetupItem key={meetup.id} meetup={meetup} />
          ))} */}

          {!meetups.recommended.length ? (
            <p>Não está rolando nenhum meetup especial por enquanto... :(</p>
          ) : (
            this.renderRecommended()
          )}
        </MeetupList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetup,
  token: state.user.token,
  visible: state.search.visible,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
