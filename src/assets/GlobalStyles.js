import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Barlow Semi Condensed';
    }
    body{
        height: 100vh;
        background: linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
        z-index: -20;
        overflow-x: hidden;
    }
`

export default GlobalStyles;