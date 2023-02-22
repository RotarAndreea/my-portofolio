import styled from "styled-components";

export const HeaderContainer = styled.div`
    background: rgb(241, 239, 237);
    height: 600px;
    width: 75%;
    position: relative;
    margin:auto;
    margin-top: 40px;
    border-radius:3px;


    @media screen and (max-width: 500px) {
        width:95%;
    }
        
`;

export const ProfileImageContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 39%;
    height: 100%;
    overflow:hidden;
    border-radius:3px;
    z-index:1;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
`;

export const HeaderContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    z-index:2;
`;

export const UpperContainer = styled.div`
    height:10%;
    z-index:2;
`
export const MiddleContainer = styled.div`
    width:100%;
    margin:auto;
    z-index:2;
`

export const TitleContent = styled.div`
    z-index:2;
`;

export const Title = styled.h1`
    font-size: 4vw;
    font-weight: 800;
    color: black;
    font-family: georgia;
    right:16px;
    position:absolute;
    padding: 40px 0;

`;
export const MiniIndex = styled.p`
    font-size: 1.8rem;
    font-family:helvetica; 
    color: black;
    font-family: georgia;
    right:16px;
    position:absolute;
 }
`;

export const BackgroundTitleConatiner=styled.div`
    position:relative;
`

export const BackgroundTitle = styled.h1`
    letter-spacing: 8px;
    font-size: 9vw;
    right:16px;
    font-family: georgia; 
    opacity:0.1;
    white-space: nowrap;
    overflow:hidden;
    z-index:3;
`;



export const FooterContainer = styled.div`
    display:flex;
    width:100%;
    height:15%;
    z-index:4;
    position:absolute;
    bottom:0;
    border-radius:10%;

`;
export const TransparentFooter = styled.div`    
    display:flex;
    z-index:4;
    position:absolute;
    bottom:0;
    width:75%;
    height:100%;
    backdrop-filter: blur(10px);
    border-radius:1%;
    align-items: center;
    justify-content:flex-end;
`;
export const BlackFooter = styled.div`
        display:flex;
        z-index:4;
        position:absolute;
        bottom:0;
        width:25%;
        height:100%;
        margin-left:75%;
        border-radius:1%;

        background:black;
    
`;
