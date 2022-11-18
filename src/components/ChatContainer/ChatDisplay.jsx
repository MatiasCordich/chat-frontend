import { useState, useEffect, useRef } from 'react'
import ChatInput from '../ChatInput/ChatInput'
import { AvatarImg } from '../Contacts/contactsElements'
import Logout from '../Logout/Logout'
import { ChatDisplayContainer, ChatHeader, MessagesContainer, Name, UserAvatar, UserDetails, Username } from './chatDisplayElements'
import axios from 'axios'
import { getAllMessagesRoute, sendMessageRoute } from '../../utils/APIRoutes'
import {v4 as uuidv4} from 'uuid'

const ChatDisplay = ({ currentChat, currentUser, socket }) => {

  const [ messages, setMesssages ] = useState([])
  const [ arrivalMessage, setArrivalMessage ] = useState(null)

  const scrollRef = useRef()

  const getCurrentChat = async () => {
    if(currentChat){
      const res = await axios.post(getAllMessagesRoute, {
        from: currentUser._id,
        to: currentChat._id
      })
      setMesssages(res.data)
    }  
  }

  useEffect(() => {
    getCurrentChat()
  },[currentChat])


  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    })
    socket.current.emit('send-msg', {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    })

    const msgs = [...messages]
    msgs.push({ fromSelf: true, message: msg})
    setMesssages(msgs)
  }

  useEffect(() => {
    if(socket.current){
      socket.current.on('msg-recieve',(msg)=>{
        setArrivalMessage({formSelf: false, message: msg})
      })
    }
  }, [])

  useEffect(() => {
    arrivalMessage && setMesssages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smoth"})
  }, [messages])

  return (
    <>
      <ChatDisplayContainer>
        <ChatHeader>
          <UserDetails>
            <UserAvatar>
              <AvatarImg src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} alt="alt-avatar" />
            </UserAvatar>
            <Username>
              <Name>{currentChat.username}</Name>
            </Username>
          </UserDetails>
          <Logout />
        </ChatHeader>
        <MessagesContainer>
          {
            messages?.map((message) => {
              return (
                <div ref={scrollRef} key={uuidv4()}>
                  <div className={`message ${message.fromSelf ? 'sended' : 'recieved'}`}>
                    <div className='content'>
                      <p>
                        {message.message}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </MessagesContainer>
          <ChatInput handleSendMsg={handleSendMsg} />
      </ChatDisplayContainer>
    </>
  )
}

export default ChatDisplay