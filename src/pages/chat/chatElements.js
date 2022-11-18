import styled from 'styled-components'

export const ChatContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
export const ChatBox = styled.div`
    width: 95%;
    height: 85vh;
    border-radius: .6rem;
    border: 2px dotted var(--blue-light);
    display: grid;
    grid-template-columns: 25% 75%;

`