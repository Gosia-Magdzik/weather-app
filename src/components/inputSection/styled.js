import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    background-color: #7d838fab;
    border-radius: 15px;
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
        outline: 1px solid black;
    }
`;