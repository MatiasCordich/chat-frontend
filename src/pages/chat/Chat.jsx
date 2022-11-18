import {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatBox, ChatContainer } from './chatElements'
import axios from 'axios'
import { allUsersRoute, host } from '../../utils/APIRoutes'
import Contacts from '../../components/Contacts/Contacts'
import Welcome from '../../components/Welcome/Welcome'
import ChatDisplay from '../../components/ChatContainer/ChatDisplay'
import {io} from 'socket.io-client'


const ChatComponent = () => {

  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser]= useState(undefined)
  const [currentChat, setCurrentChat]= useState(undefined)
  const navigate = useNavigate()
  const socket = useRef()

  useEffect( () => {
    getInformation()
  },[])

  useEffect(() => {
    getCurrentUser()
  }, [currentUser])

  useEffect(() => {
    if(!localStorage.getItem('user-info')){
      navigate('/login')
    }
  },[])

  useEffect(() => {
    if(currentUser){
      socket.current = io(host)
      socket.current.emit('add-user', currentUser._id)
    }
  }, [currentUser])
  

  const getCurrentUser = async () => {
    if(currentUser){
      if(currentUser.isAvatarImageSet){
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`)
        setContacts(data.data)
      } else {
        navigate("/setAvatar")
      }
    }
  }

  const getInformation = async () => {
    if(!localStorage.getItem('user-info')){
      navigate('/login')
    } else {
      const user = await JSON.parse(localStorage.getItem('user-info'))
      setCurrentUser(user)
    }
  }

  const handleChatChange = (chat) => {
    setCurrentChat(chat)
  }
  return (
    <>
      <ChatContainer>
        <ChatBox>
          <Contacts 
            contacts={contacts} 
            currentUser={currentUser}
            changeChat={handleChatChange}
          />
          {
            currentChat === undefined 
            ? (<Welcome currentUser={currentUser}/>)
            : (<ChatDisplay 
                currentChat={currentChat} 
                currentUser={currentUser}
                socket={socket}
              />) 
          }
          
        </ChatBox>
      </ChatContainer>
    </>
  )
}

export default ChatComponent