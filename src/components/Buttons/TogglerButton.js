import styled from "styled-components";


export const TogglerContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 3%;
    align-items: center;
   // background: ${({ theme }) => theme.background}
`;

export const TogglerText = styled.p`
    display: flex;
    color:black;
    font-weight: ${({ theme }) => theme === "light" && "bold" } ;
    
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
    `;
export const Slider = styled.div`
    display: flex;
    border:1px solid black;
    width: 30px;
    height: 15px;
    margin: 10px;
    background: ${({ theme }) => theme.body};
    border-radius: 10px;
    cursor: pointer;
`;
export const SlidierCircle = styled.div`
    display: flex;
    border: 1px solid black;
    width: 13px;
    background: ${({ theme }) => theme === 'light' ? "black" : "white"};
    border-radius: 50%;
    transform: translateX(${({ theme }) => theme === 'light' ? "0" : "14px"});
    transition: transform 0.2s linear;

`;