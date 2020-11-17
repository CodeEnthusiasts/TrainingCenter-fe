import styled from 'styled-components';

export const Template = styled.div`
  width: 380px;
  height: 100vh;
  overflow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 170px);
  overflow-y: auto;
  margin: 80px 0 100px;
`;