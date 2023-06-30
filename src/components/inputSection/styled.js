import styled from "styled-components";

export const Wrapper = styled.div`
    //align-self: left;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    padding: 10px;
    margin: 15px;
    border-radius: 15px;
    text-align: left;
    background-color: #ffffffbd;
    border: none;
    font-size: 25px;
    width: 70%;

    :focus {
        outline: none;
    }
`;

export const Img = styled.img`
    height: 30px;
`;