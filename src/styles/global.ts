import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;
    
    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
    
    --shape: #FFFFFF;
    --background: #f0f2f5;

}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html {
    //Corrige o tamanho da fonte de acordo com o tamanho da tela
@media (max-width: 1080px){
    font-size: 93.75%; // 15px
}
@media (max-width: 720px){
    font-size: 87.5%;  //14 px
   }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong {
    font-weight: 600;
}

button {
    cursor: pointer;
    
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
    background: rgba(0,0,0,0.5); //deixa um preto fosco

    position: fixed; //ocupa a tela toda
    top: 0;
    bottom: 0;
    right: 0;
    left:0;

    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    position: relative; // deixa o botao de fechar ficar no modal
    border-radius: 0.25rem;
    padding: 3rem;
}

.modal-fechar{
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
