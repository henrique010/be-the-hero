import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;

    h1 {
        margin-top: 80px;
        margin-bottom: 24px;
        color: ${({ theme }) => theme.text};
    }

    header {
        display: flex;
        align-items: center;

        span {
            font-size: 20px;
            margin-left: 24px;
            color: ${({ theme }) => theme.text};
        }

        img { height: 64px; }

        a {
            width: 260px;
            margin-left: auto;
            margin-top: 0;
        }

        button {
            height: 60px;
            width: 60px;
            border: 1px solid ${({ theme }) => theme.toggleBorder};
            background: transparent;
            margin-left: 16px;
            transition: border-color 0.2s;

            &:hover {  border-color: #999; }
        }
    }
`
export const IncidentList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
        background: #FFF;
        padding: 24px;
        border-radius: 8px;
        position: relative;

        button {
            position: absolute;
            right: 24px;
            top: 24px;
            border: 0;
            background: transparent;

            &:hover {
                opacity: 0.8;
            }
        }

        strong {
            display: block;
            margin-bottom: 16px;
            color: #41414d;
        }

        p {
            color: #737380;
            line-height: 21px;
            font-size: 16px;
        }

        p + strong {
            margin-top: 32px;
        }
    }
`
