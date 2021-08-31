import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalBox = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.25);
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px 20px;
  width: 90%;
  max-width: 450px;
  min-height: 200px;

  &:focus {
    outline: none;
  }

  .closeBtn {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .btn-class {
    margin-top: 15px;
    background-image: linear-gradient(90deg, #face48, #fcde83);
    border: none;
    border-radius: 45px;
    color: #273036;
    width: 100%;
    height: 45px;
  }
`;

export const ModalTitle = styled.h2`
  color: #273036;

  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
`;