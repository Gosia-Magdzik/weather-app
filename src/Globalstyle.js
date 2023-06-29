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
    //font-family: 'Red Hat Display', sans-serif;
    text-align: center;
    margin: 0 auto;
    //color: white;
  }
`;

export const Background = styled.div`
  background-image: url("${cold}");
  width: 100%;
  min-height: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
  text-align: center;
  align-items: center;
`;
    