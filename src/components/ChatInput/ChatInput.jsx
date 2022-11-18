import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import { BtnCotainer, BtnSend, ImgEmoji, InputChat, InputContainer, InputForm, SendIcon } from './chatInputElements'

const ChatInput = ({ handleSendMsg }) => {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [msg, setMsg] = useState('')

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker)
    }

    const handleEmojiClick = (e, emojiObj) => {
      let message = msg
      message += emojiObj.emoji
      setMsg(message)
    }

    const sendChat = (e) => {
      e.preventDefault()
      if(msg.length>0){
        handleSendMsg(msg)
        setMsg('')
      }
    }

    return (
        <InputContainer>
            <BtnCotainer>
                <ImgEmoji
                    src="https://img.icons8.com/ios/25/EEEEEE/lol--v1.png"
                    alt='btn-emoji'
                    onClick={handleEmojiPickerHideShow}
                />
                {
                    showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />
                }
            </BtnCotainer>
            <InputForm onSubmit={(e)=>sendChat(e)}>
                <InputChat 
                    type="text" 
                    placeholder="Escriba aqui" 
                    value={msg}
                    onChange={(e)=>setMsg(e.target.value)}
                    />
                <BtnSend type='submit'>
                    <SendIcon src="https://img.icons8.com/ios/25/EEEEEE/sent.png" />
                </BtnSend>
            </InputForm>
        </InputContainer>
    )
}

export default ChatInput