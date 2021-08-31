import styled from 'styled-components';
import { Typography } from '@material-ui/core/';

export const Container = styled.div`
  height: 550px;
  display: flex;
  align-items: center;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #f9cd00 inset !important;
    -webkit-box-shadow: 0 0 0 30px #f4f4f4 inset !important;
  }

  .input-class {
    color: #273036;
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

  a {
    text-decoration: none;
  }
`;

export const Title = styled(Typography)`
   @media (max-width: 1280px) {
    margin-bottom: 15px;
  };
`

