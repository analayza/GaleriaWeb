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
    background: linear-gradient(180deg, #683566 0%, rgba(191, 83, 141) 100%) !important;
  }
`;

