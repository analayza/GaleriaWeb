import styled from 'styled-components';

export const Input = styled.input`
    border: none;
    border-radius: 30px;
    height: 40px;
    background-color: rgba(196, 99, 151, 0.8);
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


export const StyledErrorMessageGlobal = styled.div`
    font-size: 16px;
    color:rgb(0, 0, 0);
    width: 100px;
    margin-top: 0.25rem;
    white-space: nowrap;
    margin-left: 10px;

`;
