import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid #48456C;
    color:rgb(0, 0, 3);
    border-radius: 30px;
    height: 40px;
    background-color:rgb(255, 255, 255);
    color: #fff;
    font-size: 16px;
    padding-left: 10px;
    outline: none;
`;


export const StyledErrorMessage = styled.div`
    font-size: 16px;
    color: #ffffff;
    width: 400px;
    margin-top: 0.25rem;
    &:before {
        content: "❌ ";
        font-size: 13px;
    }
    @media (prefers-color-scheme: dark) {
        color: var(--red-300);
    }
`;

