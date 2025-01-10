import styled from 'styled-components';

export const Input = styled.input`
    border: none;
    border-radius: 30px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.06);;
    color: #fff;
    font-size: 16px;
    padding-left: 10px;
    outline: none;
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 12px;

     &::placeholder {
        color: #ffffff; 
        font-size: 14px;
    }
`;


export const StyledErrorMessage = styled.div`
    font-size: 16px;
    color: #ffffff;
    width: 110px;
    margin-top: 0.25rem;
`;

