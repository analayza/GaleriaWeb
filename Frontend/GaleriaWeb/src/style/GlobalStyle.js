import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", serif;
  }

  body {
    min-height: 100vh;
    width: 100vw;
    background-color: #f7ebf1;
    overflow-x: hidden;

  }
`;