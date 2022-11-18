import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body, html{
    height: 100%;
    width: 100%;
    overflow: hidden;
}

html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body{
    font-size: 1.8rem;
    font-family: var(--font);
    background-color: var(--dark-navy);
}


li{
    list-style: none;
}

a{
    text-decoration: none;
}

input{
    outline: none;
}
`