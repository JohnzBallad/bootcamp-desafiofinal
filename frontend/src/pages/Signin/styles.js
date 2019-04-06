import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;

  img {
    margin: 40px 0;
  }

  p {
    margin: 20px 0;
    color: #fff;
    opacity: 0.6;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: #ffff;
  font-size: 16px;
  margin-bottom: 7px;
  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 20px;
  text-align: left;
  margin-bottom: 20px;
  background: transparent;
  border: 0;
  color: #fff;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;

  font-size: 16px;
  width: 200px;
  font-weight: bold;
  color: #fff;

  border: 0;
  border-radius: 15px;
  background-color: #e5556e;

  padding: 10px;
`;
