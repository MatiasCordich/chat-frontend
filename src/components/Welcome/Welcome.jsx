import React from 'react'
import { Instruction, RokcetImg, Title, Username, WelcomeContainer } from './welcomeElements'

const Welcome = ({ currentUser }) => {
  return (
    <WelcomeContainer>
        <RokcetImg src="https://img.icons8.com/ios/100/EEEEEE/rocket--v1.png" alt='rocket-gif'/>
        <Title>
            Bienvenido/a, <Username>{currentUser?.username}</Username> !
        </Title>
        <Instruction>
            Por favor, selecciona una conversación para empezar a chatear
        </Instruction>
    </WelcomeContainer>
  )
}

export default Welcome