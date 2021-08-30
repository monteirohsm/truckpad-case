import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
    background: #f9cd00;
}

  *, input, button {
    font-family: 'Roboto', sans-serif;
  }
  
`