import { useState, useEffect } from 'react'
import { AvatarBox, AvatarImg, Brand, Contact, ContactsBox, ContactsContainer, CurrentUserBox, ImgLogo, Title, Username, UsernameBox } from './contactsElements'


const Contacts = ({ contacts, currentUser, changeChat }) => {
    const [currentUserName, setCurrentUserName] = useState(undefined)
    const [currentUserImage, setCurrentUserImage] = useState(undefined)
    const [currentSelected, setCurrentSelected] = useState(undefined)

    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage)
            setCurrentUserName(currentUser.username)
        }
    }, [currentUser])

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index)
        changeChat(contact)
    }

    return (

        <>
            {
                currentUserImage && currentUserName && (
                    <ContactsContainer>
                        <Brand>
                            <ImgLogo src="https://img.icons8.com/ios/50/EEEEEE/topic.png" alt='chat-img' />
                            <Title>
                                ChatIT
                            </Title>
                        </Brand>
                        <ContactsBox>
                            {
                                contacts.map((contact, index) => {
                                    return (
                                        <Contact 
                                            className={`contact ${index === currentSelected ? "selectedChat" : ""}`} 
                                            key={contact._id}
                                            onClick={() => changeCurrentChat(index, contact)}
                    
                                           
                                            >
                                            <AvatarBox>
                                                <AvatarImg src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="alt-avatar" />
                                            </AvatarBox>
                                            <UsernameBox>
                                                <Username>
                                                    {contact.username}
                                                </Username>
                                            </UsernameBox>
                                        </Contact>
                                    )
                                })
                            }


                        </ContactsBox>
                        <CurrentUserBox>
                            <AvatarBox>
                                <AvatarImg src={`data:image/svg+xml;base64,${currentUserImage}`} alt="alt-avatar" />
                            </AvatarBox>
                            <UsernameBox>
                                <Username>
                                    {currentUserName}
                                </Username>
                            </UsernameBox>
                        </CurrentUserBox>
                    </ContactsContainer>
                )
            }
        </>
    )
}

export default Contacts