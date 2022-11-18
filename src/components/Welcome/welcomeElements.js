import styled, { keyframes } from "styled-components";

const UpAndDown = keyframes`
    0% {transform: translatey(0px);}
    50% {transform: translatey(-10px);}
    100% {transform: translatey(0px);}
`

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`
export const RokcetImg = styled.img`
    animation-name: ${UpAndDown};
    animation-duration: 6s;
    transition-timing-function: ease-in-out;
    animation-iteration-count: infinite;
`
export const Title = styled.h1`
    color: var(--smoke);
`

export const Username = styled.span`
    color: var(--blue-light);
`

export const Instruction = styled.h3`
    width: 80%;
    text-align: center;
    color: var(--smoke);
    line-height: 4rem;
`