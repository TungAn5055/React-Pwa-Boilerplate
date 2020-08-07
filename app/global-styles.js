import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .container1 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 19px;
  }

  .container1 > .card img {
    max-width: 100%;
  }

  .header-custom {
    min-height: 4rem;
    text-align: right;
  }

  .header-custom button {
    border: 2px solid #a0ada1;
    height: 3rem;
    margin-top: 10px;
    cursor: pointer;
    font-size: 100%;
    padding: 0;
    touch-action: manipulation;
    user-select: none;
    min-width: 7rem;
    padding: revert;
  }

  .login-form {
    text-align: center;
    margin: auto;
    width: 50%;
    padding: 10px;
  }
`;

export default GlobalStyle;
