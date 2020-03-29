import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const BackLink = styled(Link)`
    ${props => props.button ? 
    css`
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
    `:  
    css`
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;

        svg {
            margin-right: 12px;
        }
        &:hover {
            opacity: 0.8;
        }
    ` }
`

export default BackLink;