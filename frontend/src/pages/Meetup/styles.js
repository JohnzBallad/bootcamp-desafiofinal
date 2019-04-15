import styled from 'styled-components';
import Dropzone from 'react-dropzone';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  label {
    margin-left: 5px;
    display: flex;
    text-align: center;
  }

  div {
    margin-top: 20px;
    p {
      margin-bottom: 25px;
      font-size: 16px;
    }
  }
`;

export const Label = styled.span`
  color: #ffff;
  font-size: 16px;
  margin-bottom: 7px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Checkbox = styled.input`
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

export const Input = styled.input`
  text-align: left;
  font-size: 20px;

  width: 292px;
  margin-bottom: 20px;

  color: #fff;
  background: transparent;

  border: 0;
`;

export const Preview = styled.img`
  max-width: 250px;
  max-height: 250px;
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

export const File = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 660px;
  padding: 25px;

  margin-bottom: 10px;

  border: 2px dashed #b4b4b4;
  font-size: 16px;
  color: #777777;
`;
