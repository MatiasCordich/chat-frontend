import styled from 'styled-components'

export const ChatDisplayContainer = styled.div`
    display: grid;
    grid-template-rows: 10% 80% 10%;
    overflow: hidden;
`
export const ChatHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    border-bottom: 2px dotted var(--blue-light);
`
export const UserDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`
export const UserAvatar = styled.div`
`
export const Username = styled.div`
    color: var(--white);
`
export const Name = styled.h3`
`
export const MessagesContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    line-height: 3rem;
    gap: 1.5rem;
    overflow: auto;
    border-bottom: 2px dotted var(--blue-light);

    &::-webkit-scrollbar{
        width: .2rem;
        &-thumb{
            background-color: var(--blue-light);
            width: .1rem;
            border-radius: 1rem;
        }
    }

    .message{
        display: flex;
        align-items: center;

        .content{
            max-width: 40%;
            overflow-wrap: break-word;
            padding: 1rem;
            font-size: 2rem;
            border-radius: 1rem;
            color: var(--white);
        }
    }

    .sended{
        justify-content: flex-end;
        .content{
            background-color: var(--smoke);
            color: var(--dark-navy);
        }
    }
    
    .recieved{
        justify-content: flex-start;
        .content{
            background-color: var(--blue-light);
        }
    }

`

