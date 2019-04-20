import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  };

  handleClick = () => {
    console.log('Something');
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

export default MeetupItem;
