import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoutBtn } from './logoutElements'


const Logout = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <LogoutBtn onClick={handleClick}>Cerrar sesión</LogoutBtn>
  )
}

export default Logout