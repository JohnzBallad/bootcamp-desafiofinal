import React from 'react';
import ArrowIcon from '@material-ui/icons/ArrowForwardIos';

import {
  Container, Image, Info, Button, Icon,
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

      <Button>
        {/* <ArrowIcon /> */}
        <Icon />
      </Button>
    </Info>
  </Container>
);

export default MeetupItem;
