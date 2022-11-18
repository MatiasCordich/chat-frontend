import styled from 'styled-components'

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: var(--background);
`
export const Form = styled.form`
    max-width: 50rem;
    width: 95%;
    margin: 0 auto;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    border: 2px dotted var(--blue-light);
    padding: 5rem;
    border-radius: 2rem;
`
export const Brand = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const ImageForm = styled.img``;

export const TitleForm = styled.h1`
    color: var(--smoke);
`
export const Input = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--blue-light);
    padding: 1rem;
    font-size: 1.9rem;
    color: var(--white);
    font-family: var(--font);
`
export const FieldForm = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    border: none;
    
`
export const ButtonSubmit = styled.button`
    background-color: var(--blue-light);
    border: none;
    margin: 0 auto;
    width: 90%;
    color: var(--white);
    font-family: var(--font);
    text-transform: uppercase;
    font-size: 1.9rem;
    letter-spacing: .2rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: .6rem;
`
export const LoginBox = styled.span`
    color: var(--white);
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 1rem;

    a{
        text-transform: uppercase;
        color: var(--blue-light);
    }

    @media (max-width: 420px ) {
        flex-direction: column;
    }
`
