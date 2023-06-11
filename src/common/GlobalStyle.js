import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    position: relative;
    padding: 0;
    margin: 0;
    font-family: -apple-system, GmarketSans, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  input{
    border: 0;
  }
    
  h1{
    font-size: 3rem;
    margin-bottom: 0;
  }

  p{
    font-size: 1rem;
    font-weight: 400;
  }

  button{
    cursor: pointer;
  }

  img{
    width: 100%;
  }
`;