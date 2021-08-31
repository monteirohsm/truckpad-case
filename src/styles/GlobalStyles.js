import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
    background-color: #f4f4f4;
  };

  *, input, button {
    font-family: 'Roboto', sans-serif;
  }
  
`;
