import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --red: #e52e40;
  --green: #33cc95;
  --blue: #5429cc;

  --blue-light: #6933ff;

  --text-title: #363f5f;
  --text-body: #969cb3;

  --background: #f0f2f5;
  --shape: #ffffff;
}
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
// Padrão tamanho de font: 16px (ideal para desktop)
html{
  @media(max-width: 1080px){
    font-size: 93.75%; // 15px
  }
  @media(max-width: 720px){
    font-size: 87.5%; // 14px
  }
}
 /* Utilizaremos a medida REM 
 1rem = 16px nas telas grandes
 1rem = 15px nas telas menores de 1080px
 1rem = 14px nas telas menores de 720px */

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}
button{ 
  cursor: pointer
}
[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay{
background: rgba(0,0,0, 0.5);
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
}
.react-modal-content{
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.24rem;
}

.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;

  transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
}
`;

