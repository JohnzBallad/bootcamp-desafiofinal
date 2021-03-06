import styled from 'styled-components';

export const Logo = styled.img`
  margin-right: 30px;
  height: 25px;
`;

export const Container = styled.div`
  background: #e5556e;
  padding: 25px 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  margin-right: 30px;
  cursor: pointer;

  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const LeftWrapper = styled.div`
  display: flex;
`;

export const Icon = styled.button`
  border: 0;
  outline: 0;
  background: transparent;

  svg {
    color: #fff;
    height: 24px;
    width: 24px;
    font-size: 24px;
  }

  &:first-child {
    margin-right: 10px;
  }
`;
