import React from 'react';

import {
  Container, Image, Info, Button, Icon,
} from './styles';

const MeetupItem = ({ meetup }) => (
  <Container>
    <Image src={`http://localhost:3001/files/${meetup.cover}`} alt="Meetup image" />

    <Info>
      <div>
        <strong>{meetup.title}</strong>

        <small>{`${meetup.subscribers} membros`}</small>
      </div>

      <Button>
        <Icon />
      </Button>
    </Info>
  </Container>
);

export default MeetupItem;
