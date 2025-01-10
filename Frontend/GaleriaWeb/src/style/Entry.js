import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { FaCamera } from 'react-icons/fa';

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
    background: linear-gradient(180deg, #683566 -10%, rgba(182, 62, 126) 100%) !important;
  }
`;

export const StyleLink = styled.a`
  color: #ffffff;
  font-weight: bold;
  
   &:hover {
    color: #ffffff; 
    text-decoration: none;
  }
`;

export const StyleP = styled.p`
  color: #d573b0;
`;

export const ButtonEntry = styled.button`
    border-radius: 30px;
    background: linear-gradient(180deg, #ba3c80 -10%, rgba(217, 65, 134) 100%) !important;
    height: 40px;
    width: 300px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 25px;
    margin-top: 15px;
    padding-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImageLogo = styled(FaCamera)`
  width: 100px;
  height: 100px;
  padding-bottom: 15px;
  color: #ffffff;
`;

export const InlineContainer = styled.div`
  display: inline-flex;
  align-items: center; 
  gap: 8px;
  margin-top: 10px; 
`;