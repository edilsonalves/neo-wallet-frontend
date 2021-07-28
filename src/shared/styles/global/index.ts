import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body, button, input {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
  }

  body {
    background: #f8f8fb;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
