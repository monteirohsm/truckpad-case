import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #273036;
  text-align: center;
  height: 7%;

  @media (max-width: 1280px) {
    height: 0;
  }
`;

