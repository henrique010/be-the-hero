import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px Roboto, sans-serif;
        background: ${({ theme }) => theme.body};
        -webkit-font-smoothing: antialiased;
    }

    input, button, textarea {
        font: 400 18px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    form input {
        width: 100%;
        height: 60px;
        color: ${({ theme }) => theme.text};
        border: 1px solid ${({ theme }) => theme.toggleBorder};
        border-radius: 8px;
        padding: 0 24px;
        background: ${({ theme }) => theme.backgroundInput}
    }

    form textarea {
        width: 100%;
        resize: vertical;
        min-height: 140px;
        color: ${({ theme }) => theme.text};
        border: 1px solid ${({ theme }) => theme.toggleBorder};
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px;
        background: ${({ theme }) => theme.backgroundInput}
    }
`