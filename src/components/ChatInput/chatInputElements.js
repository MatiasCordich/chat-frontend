import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 5% 95%;
    gap: 2rem;
    padding: 0 2rem;
`
export const BtnCotainer = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .4rem;
    background-color: var(--blue-light);
    cursor: pointer;
    position: relative;

    aside.emoji-picker-react{
        width: 40rem;
        position: absolute;
        top: -38rem;
        left: 1rem;
        z-index: 1;
        gap: 1rem;
        background-color: transparent;
        box-shadow: none;
        border: 2px dotted var(--blue-light);

        .emoji-scroll-wrapper::-webkit-scrollbar{
            width: .3rem;
            
            &-thumb{
                background-color: var(--blue-light);
            }
        }

        .emoji-categories {
            background-color: var(--white);
        }

        .emoji-categories button{
            opacity:1;
        }

        .emoji-search{
            padding: 1rem;
            background-color: transparent;
            color: var(--white);
            border: 2px dotted var(--blue-light);
        }

       .emoji-group:before{
            background: var(--blue-light);
            color: var(--white);
            margin: 1rem 0;
            font-family: var(--font);
            padding: .4rem;
        }


    }
`
export const ImgEmoji = styled.img`
    padding: 1rem;
`
export const InputForm = styled.form`
    display:flex;
    align-items: center;
    gap: .5rem;
    width: 95%;
`
export const InputChat = styled.input`
    font-family: var(--font);
    font-size: 1.8rem;
    color: var(--white);
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--blue-light);
    padding: 1rem;
    width: 100%;

    &::placeholder{
        color: var(--white);
    }
`
export const BtnSend = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: var(--blue-light);
    border-radius: 100%;
    cursor: pointer;

`
export const SendIcon = styled(ImgEmoji)`
`
