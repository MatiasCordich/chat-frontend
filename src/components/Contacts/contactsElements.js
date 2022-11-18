import styled from "styled-components";

export const ContactsContainer = styled.div`
    display: grid;
    grid-template-rows: 10% 75% 15%;
    overflow: hidden;
    border-right: 2px dotted var(--blue-light);
`
export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
`
export const ImgLogo = styled.img``
export const Title = styled.h3`
    color: var(--white);
`
export const ContactsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 1rem;

    &::-webkit-scrollbar{
        width: .2rem;
        &-thumb{
            background-color: var(--blue-light);
            width: .1rem;
        }
    }
    
`
export const Contact= styled.div`
    border: 2px dotted var(--blue-light);
    display: flex;
    align-items: center;
    gap: 1rem;
    min-height: 5rem;
    width: 90%;
    cursor: pointer;
    border-radius: .6rem;
    padding: 1rem;
    transition: .5s ease-in-out;

    &.selectedChat{
        background-color: var(--blue-light);
    }
`
export const AvatarBox = styled.div`
    display: flex;
    justify-content: center;
`
export const AvatarImg = styled.img`
    height: 4rem;
`
export const UsernameBox = styled.div``
export const Username = styled.h3`
    color: var(--smoke );
`
export const CurrentUserBox = styled.div`
    border: 2px dotted var(--smoke);
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 90%;
    margin: 2rem auto;
`