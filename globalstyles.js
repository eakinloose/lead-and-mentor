import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   *,
   *::before,
   *::after {
      box-sizing: border-box;
      font-family: 'Ubuntu', sans-serif;
   }
 
   html {
      font-size: 62.5%;
   }

   body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.5rem;
    background: #fafafc;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: ${({ theme }) => theme.colors?.black};
  }
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors?.black};
   }

   button, .button{
    border: 0;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-block;
    width: 150px;
    text-align: center;
    padding: 1.2rem 2.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.5rem;
    letter-spacing: 0;
    line-height: 1.6rem;
    border-radius: 10px;
    text-transform: capitalize;
    transition: transform 600ms ease-in-out;
    background-color: ${({ theme }) => theme.colors?.button};
    border: 2px solid ${({ theme }) => theme.colors?.button};
    color: ${({ theme }) => theme.colors.white};
   }

   .buttonClear{
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors?.button};
    color: ${({ theme }) => theme.colors?.button};
   }

   button:hover, .button:hover{
    background-color: ${({ theme }) => theme.colors?.buttonhover};
   }

   input, textarea{
    width: 100%;
    max-width: 560px;
    border: 1px solid grey;
    outline: none;
    font-size: 1.5rem;
    appearance: none;
    border-radius: 0;
    padding: 1.08rem;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors?.grey01};
   }

   input:hover, textarea:hover{
    background-color: ${({ theme }) => theme.colors?.inputhover};
   }

  input::placeholder, textarea::placeholder {
    font-weight: 400;
    opacity: .9;
    font-size: 12px;
    text-transform: capitalize !important;
    color: grey;
  }
`;

export { GlobalStyles };
