import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    gap: 6rem;
`
export const TitleContainer = styled.div`
`
export const Title = styled.h1`
    color: var(--white);
`
export const Avatars = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 2px;
`
export const Avatar = styled.div`
    display: flex;
    gap: 2rem;
    padding:2px;
    transition: .5s ease-in-out ;
    border-radius: 100%;


`
export const ImageAvatar = styled.img`
    height: 10rem;
    padding: 2px;
`

export const ButtonSetAvatar = styled.button`
    background-color: var(--blue-light);
    color: var(--white);
    padding: 1rem 3rem;
    text-transform: uppercase;
    font-size: 1.9rem;
    cursor: pointer;
    border-radius: .6rem ;
`

export const LoadingImg = styled.img``