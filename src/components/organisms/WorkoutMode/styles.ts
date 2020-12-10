import styled from 'styled-components';
import H2Proto from '../../atoms/H2';
import { ButtonWrapper } from '../../atoms/Button/styles';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const H2 = styled(H2Proto)`
  flex-grow: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  flex: none;
`;

export const FirstContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 15px 5px;
  align-items: center;
  flex: none;
`;

export const Button = styled(ButtonWrapper)`
  width: 32px;
  height: 32px;
  margin: 0 4px;
`;

export const TableContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  overflow-y: auto;
  max-width: 350px;
  min-width: 280px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: seperated;
  border-spacing: 0px 10px;
`;