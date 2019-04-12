import React from 'react';

import {
  Container, Image, Info, Button,
} from './styles';
import Foto from '../../assets/meetup1.jpg';

const MeetupItem = ({ meetup }) => (
  <Container>
    <Image src={Foto} alt="Meetup image" />

    <Info>
      <div>
        <strong>{meetup.title}</strong>

        <small>{`${meetup.members} membros`}</small>
      </div>

      <Button>{'>'}</Button>
    </Info>
  </Container>
);

export default MeetupItem;
