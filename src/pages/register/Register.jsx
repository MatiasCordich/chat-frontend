import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Brand, ButtonSubmit, FieldForm, Form, FormContainer, ImageForm, Input, LoginBox, TitleForm, InputBox } from './RegisterElements'
import axios from 'axios'
import { registerRoute } from '../../utils/APIRoutes'


const RegisterComponent = () => {

  const navigate = useNavigate()

  const [values, setValues] = useState(
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  )

  const messages = {
    nameRequired: "Nombre requirido",
    emailRequired: "Email requerido",
    passwordRequired: "Contraseña obligatoria",
    confPassRequired: "Reingrese la contraseña",
    nameLength: "El nombre debe tener mas de 3 caracteres",
    emailValid: "Ingresa un email valido",
    passwordLength: "La contraseña debe tener minimo 8 caracteres",
    confirmPasswordNotMatch: "La contraseña no coincide"
  }


  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
  const [errorBackMsg, setErrorBackMsg] = useState('')
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })

  }

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate('/')
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      validateName() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {

      const { username, email, password } = values

      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      })

      if(data.status === false){
        setErrorBackMsg(data.msg)
      } 
      
      if(data.status === true){
        setErrorBackMsg('')
        localStorage.setItem('user-info', JSON.stringify(data.user))
        navigate('/')
      }      
    }
    
  }

const validateName = () => {

  let validate = false;

  if (!values.username) {
    setErrorName(messages.nameRequired)
    return
  } else if (values.username && values.username.length >= 1 && values.username.length <= 3) {
    setErrorName(messages.nameLength)
  } else {
    setErrorName('')
    validate = true
  }

  return validate
}


const validateEmail = () => {

  let validate = false;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

  if (!values.email) {
    setErrorEmail(messages.emailRequired)
  } else if (values.email && !regex.test(values.email)) {
    setErrorEmail(messages.emailValid)
  } else {
    setErrorEmail('')
    validate = true
  }

  return validate

}

const validatePassword = () => {

  let validate = false;

  if (!values.password) {
    setErrorPassword(messages.passwordRequired)
  } else if (values.password && values.password.length >= 1 && values.password.length <= 7) {
    setErrorPassword(messages.passwordLength)
  } else {
    setErrorPassword('')
    validate = true
  }

  return validate
}

const validateConfirmPassword = () => {

  let validate = false;

  if (!values.confirmPassword) {
    setErrorConfirmPassword(messages.confPassRequired)
  } else if (values.confirmPassword && values.confirmPassword !== values.password) {
    setErrorConfirmPassword(messages.confirmPasswordNotMatch)
  } else {
    setErrorConfirmPassword('')
    validate = true
  }

  return validate
}

const style = { color: "#1089FF" }



return (
  <>
    <FormContainer>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Brand>
          <TitleForm>
            ChatIT!
          </TitleForm>
          <ImageForm src="https://img.icons8.com/ios/50/EEEEEE/topic.png" />
        </Brand>
        <FieldForm>
          <InputBox>
            <Input
              type="text"
              placeholder="Username"
              name='username'
              onChange={(e) => handleChange(e)}
              value={values.username}
            />
            <p style={style}>{errorName}</p>
            <p style={style}>{errorBackMsg}</p>
          </InputBox>

          <InputBox>
            <Input
              type="text"
              placeholder="Email"
              name='email'
              onChange={(e) => handleChange(e)}
              value={values.email}
            />
            <p style={style}>{errorEmail}</p>
            <p style={style}>{errorBackMsg}</p>
          </InputBox>

          <InputBox>
            <Input
              type="password"
              placeholder="Password"
              name='password'
              onChange={(e) => handleChange(e)}
              value={values.password}
            />
            <p style={style}>{errorPassword}</p>
          </InputBox>

          <InputBox>
            <Input
              type="password"
              placeholder="Confirm Password"
              name='confirmPassword'
              onChange={(e) => handleChange(e)}
              value={values.confirmPassword}
            />
            <p style={style}>{errorConfirmPassword}</p>
          </InputBox>

          <ButtonSubmit
            type='submit'
          >Registrarse</ButtonSubmit>
          <LoginBox>
            Tienes una cuenta?
            <Link to="/login">
              Login
            </Link>
          </LoginBox>
        </FieldForm>
      </Form>
    </FormContainer>
  </>
)
}

export default RegisterComponent