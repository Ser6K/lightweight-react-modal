import styled from 'styled-components';

export const Button = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
    color: grey;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: black;
    }
    &:focus {
        color: black;
        outline: 0;
    }
`;
