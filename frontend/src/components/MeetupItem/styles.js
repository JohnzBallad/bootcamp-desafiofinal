import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
  margin-right: 20px;
  width: 290px;
  border-radius: 6px;
  background: #fff;
`;

export const Image = styled.img`
  height: 140px;
  width: 290px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;

    strong {
      color: #222222;
      font-size: 16px;
    }

    small {
      font-size: 14px;
      color: #999999;
      margin-top: 5px;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  background: #e5556e;
  border-radius: 50%;
  padding: 10px 15px;

  color: #fff;
`;
