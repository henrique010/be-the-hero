import styled from 'styled-components';

const Button = styled.button.attrs(() => ({
    type: 'submit'
}))`
    width: 100%;
    height: 60px;
    background: #E02041;
    border: 0;
    border-radius: 8px;
    color: #FFF;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2;

    &:hover {
        filter: brightness(90%); 
    }
`

export default Button;