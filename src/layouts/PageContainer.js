import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    background: rgb(241, 239, 237);
    height: 600px;
    width: 75%;
    margin:auto;
    background: ${({ theme }) => theme.background};

    @media screen and (max-width: 500px) {
        width:95%;
    }
`;

