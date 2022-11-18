import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import loader from '../../assets/loader.gif'
import { Buffer } from 'buffer'
import axios from 'axios'
import { setAvatarRoute } from '../../utils/APIRoutes'
import { Avatar, Avatars, ButtonSetAvatar, Container, ImageAvatar, LoadingImg, Title, TitleContainer } from './setAvatarElements'
import './avatar.css'
const SetAvatar = () => {

  const api = "https://api.multiavatar.com/4645646/Jf7ePYsZ6q1NjW"

  const [avatars, setAvatars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedAvatar, setSelectedAvatar] = useState(undefined)
  const [errorSelectAvatar, setErrorSelectAvatar] = useState('')

  const navigate = useNavigate()

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      setErrorSelectAvatar('Por favor elige una imagen de perfil')
    } else {
      setErrorSelectAvatar('')
      const user = await JSON.parse(localStorage.getItem('user-info'))
      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar]
      })

      if (data.isSet) {
        user.isAvatarImageSet = true
        user.avatarImage = data.image
        localStorage.setItem('user-info', JSON.stringify(user))
        navigate('/')
      } else {

      }
    }


  }

  const pickAvatar = async () => {

    const data = []

    for (let i = 0; i < 4; i++) {
      const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`)

      const buffer = new Buffer(image.data)
      data.push(buffer.toString("base64"))

    }

    setAvatars(data)
    setIsLoading(false)
  }

  useEffect(() => {
    pickAvatar()
  }, [])

  useEffect(() => {
    if(!localStorage.getItem('user-info')){
      navigate('/login')
    }
  },[])

  const style = {
    color: '#1089FF'
  }

  return (
    <>
      {
        isLoading ?

          <Container>
            <LoadingImg src={loader} alt='loader' />
          </Container> :

          <Container>
            <TitleContainer>
              <Title>
                Elije una imagen como tu foto de perfil
              </Title>
            </TitleContainer>
            <Avatars>
              {
                avatars.map((avatar, index) => {
                  return (
                    <Avatar
                      key={index}
                      className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
                    >
                      <ImageAvatar src={`data:image/svg+xml;base64,${avatar}`} alt="alt-avatar"
                        key={avatar}
                        onClick={() => setSelectedAvatar(index)} />
                    </Avatar>

                  )
                })
              }
            </Avatars>
            <ButtonSetAvatar onClick={setProfilePicture}>
              Establecer como foto de perfil
            </ButtonSetAvatar>
            <p style={style}>{errorSelectAvatar}</p>
          </Container>

      }

    </>
  )
}

export default SetAvatar