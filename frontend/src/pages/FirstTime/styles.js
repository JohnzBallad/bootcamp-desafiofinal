import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
  }

  p {
    margin: 15px 0;
    width: 315px;
    height: 112px;
    line-height: 28px;
    font-size: 16px;
    text-align: self;
    color: #fff;
    opacity: 0.8;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-left: 5px;
    display: flex;
    text-align: center;
  }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  margin-right: 10px;

  border-radius: 4px;
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: 0;
  background: #544b57;

  &:checked {
    background-color: #e5556e;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;

  font-size: 16px;
  width: 300px;
  font-weight: bold;
  color: #fff;

  margin-top: 20px;

  border: 0;
  border-radius: 20px;
  background-color: #e5556e;

  padding: 12px;
`;
