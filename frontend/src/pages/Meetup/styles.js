import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  img {
    margin-top: 40px;

    width: 900px;
    height: 300px;
  }

  h3 {
    margin-top: 30px;
    font-size: 24px;
  }

  p {
    opacity: 0.8;
  }
`;

export const MeetupInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  margin-top: 30px;

  display: flex;
  justify-content: center;

  font-size: 16px;
  width: 300px;
  font-weight: bold;
  color: #fff;

  border: 0;
  border-radius: 20px;
  background-color: #e5556e;

  padding: 12px;
`;

export const Counter = styled.small`
  color: #999999;
  font-size: 14px;
  margin-bottom: 15px;
  margin-top: 2px;
`;

export const Location = styled.small`
  color: #999999;
  font-size: 14px;
  margin-bottom: 10px;
  margin-bottom: 5px;
`;

export const When = styled.small`
  color: #999999;
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const Description = styled.p`
  opacity: 0.8;
  font-size: 16px;
  color: #ffffff;
  line-height: 28px;
  text-align: left;

  max-width: 315px;

  margin-bottom: 15px;
`;
