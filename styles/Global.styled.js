import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(45deg, #151515, #121212);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    width:97%;
    margin:auto;
    text-rendering: optimizeLegibility;
  }
  a {
      text-decoration:none;
  }
`;

// ${'' /* body {
//   background: linear-gradient(45deg, #151515, #121212);
// } */}
