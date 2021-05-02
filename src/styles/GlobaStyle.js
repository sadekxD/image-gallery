import { createGlobalStyle } from "styled-components";

export const GlobarStyle = createGlobalStyle`
    :root {
        --font-1: 'Lobster', cursive;
        --font-2: 'Poppins', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: var(--font-2);
        background-color: #f7f2f2;
    }

    img {
        width: 100%;
    }

    input, button {
        border: none;
        &:focus {
            outline: none;
        }
    }

`;
