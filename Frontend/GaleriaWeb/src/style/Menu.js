import styled from "styled-components";
import { FaCamera } from 'react-icons/fa';

export const SideNav = styled.nav`
    height: 100vh;
    width: 250px; 
    position: fixed; 
    top: 0;
    left: 0;
    background: linear-gradient(180deg,rgb(255, 255, 255) -10%, rgba(182, 62, 126) 100%) !important;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const NavItem = styled.a`
    color: black;
    text-decoration: none;
    margin: 15px 0;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
        color: #d573b0; 
    }
`;

export const ImageLogo = styled(FaCamera)`
  width: 45px;
  height: 45px;
  padding-bottom: 15px;
  color: #000000;
`;

export const DivLogo = styled.div`
    flex-direction: row;
    display: flex;
`;