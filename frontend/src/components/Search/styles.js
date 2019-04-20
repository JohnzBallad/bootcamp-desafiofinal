import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #2e2d37;
  padding: 20px;

  max-width: 910px;
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  outline: 0;

  color: #fff;

  letter-spacing: 0;
  font-size: 15px;

  margin-left: 5px;
`;

export const Icon = styled(SearchIcon)`
  color: #8e8e93;

  height: 12px;
  width: 12px;
`;
