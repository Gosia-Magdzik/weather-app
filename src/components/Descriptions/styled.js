import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 0 auto;
    padding: 20px;
    justify-content: center;

    @media (max-width: 600px) {
        grid-gap: 8px;
        padding: 10px;
    }
  
    @media (max-width: 380px) {
        grid-gap: 8px;

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
    align-items: center;
`;

export const Icon = styled.img`
    height: 60px;
`;

export const SunWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    justify-content: center;
`;

export const Sun = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;