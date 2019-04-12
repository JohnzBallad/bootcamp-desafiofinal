import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
`;

export const MeetupList = styled.div`
  margin-top: 50px;
  margin-left: 255px;

  h3 {
    margin-bottom: 15px;
    &:not(:first-child) {
      margin-top: 35px;
    }
  }
`;
