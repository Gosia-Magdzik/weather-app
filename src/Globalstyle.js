import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import hot from "./images/hot.jpg";
import cold from "./images/cold.jpg"; 

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    text-align: center;
    margin: 0 auto;
    //color: white;
    font-family: 'Antonio', sans-serif;
  }
`;

export const Background = styled.div`
  //background-image: url("${cold}");
  background-blend-mode: overlay;
  width: 100%;
  min-height: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
  align-items: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 2rem; 
`;
    