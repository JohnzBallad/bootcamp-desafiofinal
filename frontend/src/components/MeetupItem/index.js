import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import {
  Container, Image, Info, Button, Icon,
} from './styles';

class MeetupItem extends Component {
  static propTypes = {
    meetup: PropTypes.shape({
      cover: PropTypes.string,
      title: PropTypes.string,
      subscribers: PropTypes.number,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  handleClick = () => {
    // console.log(this.props);
    const { history, meetup } = this.props;
    history.push({
      pathname: `/dashboard/meetup/${meetup.id}`,
      state: { meetup },
    });
  };

  render() {
    const { meetup } = this.props;

    return (
      <Container>
        <Image src={`http://localhost:3001/files/${meetup.cover}`} alt="Meetup image" />

        <Info>
          <div>
            <strong>{meetup.title}</strong>

            <small>{`${meetup.subscribers} membros`}</small>
          </div>

          <Button onClick={this.handleClick}>
            <Icon />
          </Button>
        </Info>
      </Container>
    );
  }
}

export default withRouter(MeetupItem);
