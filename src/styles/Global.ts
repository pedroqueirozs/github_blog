import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Nunito", sans-serif;
color: ${(props)=> props.theme['text_paragraphs']};

}

body{
background: ${(props)=> props.theme["background_body"]};
font-size: 1rem;
}
h1{
    font-size: 2rem;
    color: ${(props)=> props.theme['text_titles']};
}
h3{
    font-size: 1.25rem;
    color: ${(props)=> props.theme['text_titles']};
}
`;
