import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 0 auto;
    padding: 20px 20px 80px 20px;
    justify-content: center;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 150px);
    }
  
    @media (max-width: 380px) {
        grid-template-columns: repeat(1, 150px);
    }
`;

export const CardDetail = styled.div`
    background-color: black;
    border-radius: 10px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    color: #ffe142;
`;

export const Icon = styled.img`
    height: 50px;
`;