import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    //justify-content: space-between;
    padding: 15px;
    background-color: #7d838fab;
    border-radius: 15px;
    margin: 20px;
`;

export const Input = styled.input`
    padding: 15px;
    margin: 15px;
    border-radius: 15px;
    text-align: center;
    background-color: #ffffffbd;
    //color: white;
    border: none;
    font-size: 30px;

    :focus {
        outline: none;
    }
`;

export const Button = styled.button`
    padding: 15px;
    margin: 15px;
    border-radius: 15px;
    text-align: center;
    background-color: #ffffffbd;
    border: none;
    font-size: 30px;
    transition: transform 0.3s ease;

    &:hover {
        scale: 1.1;
        background-color: #615656bd;
        cursor: pointer;
    }

    &:active {
        color: white;
    }
`;