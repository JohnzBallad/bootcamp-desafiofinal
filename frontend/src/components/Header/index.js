import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';

import { Creators as SearchActions } from '../../store/ducks/search';

import {
  Logo, Container, Button, LeftWrapper, Person,
} from './styles';
import WhiteLogo from '../../assets/logo-white.svg';

class Header extends Component {
  static propTypes = {
    showSearchInput: PropTypes.func.isRequired,
    hideSearchInput: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  handleGoInit = () => {
    const { history, location } = this.props;

    if (location.pathname !== '/dashboard') {
      history.push('/dashboard');
    }
  };

  handleSearch = () => {
    const { showSearchInput, hideSearchInput, visible } = this.props;

    if (visible) {
      hideSearchInput();
    } else {
      showSearchInput();
    }
  };

  handleNewMeetup = () => {
    const { history } = this.props;
    history.push('/meetup/create');
  };

  handleGoProfile = () => {
    const { history, location } = this.props;

    if (location.pathname !== '/profile') {
      history.push('/profile');
    }
  };

  render() {
    return (
      <Container>
        <LeftWrapper>
          <Logo src={WhiteLogo} alt="logo white" />

          <Button onClick={this.handleGoInit} type="button">
            Início
          </Button>

          <Button onClick={this.handleSearch} type="button">
            Buscar
          </Button>

          <Button onClick={this.handleNewMeetup} type="button">
            Novo meetup
          </Button>
        </LeftWrapper>

        <Person onClick={this.handleGoProfile} type="button">
          <PersonIcon />
        </Person>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.search.visible,
});

const mapDispatchToProps = dispatch => bindActionCreators(SearchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Header));
