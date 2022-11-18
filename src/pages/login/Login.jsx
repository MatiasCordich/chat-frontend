import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Brand, ButtonSubmit, FieldForm, Form, FormContainer, ImageForm, Input, LoginBox, TitleForm, InputBox } from './LoginElements'
import axios from 'axios'
import { loginRoute } from '../../utils/APIRoutes'


const LoginComponent = () => {

  const navigate = useNavigate()

  const [values, setValues] = useState(
    {
      username: "",
      password: "",
    }
  )

  const messages = {
    nameRequired: "Nombre requerido",
    passwordRequired: "Contraseña obligatoria",
    incorrectInput: "Usuario o Contraseña incorrecto"
  }


  const [errorName, setErrorName] = useState('')

  const [errorPassword, setErrorPassword] = useState('')

  const [errorBackMsg, setErrorBackMsg] = useState('')

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      navigate('/')
    }
  },[])

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateName() && validatePassword()) {

      const { username, password } = values

      const { data } = await axios.post(loginRoute, {
        username,
        password,
      })

      if(data.status === false){
        setErrorBackMsg(data.msg)
      } else {
        setErrorBackMsg('')
        localStorage.setItem('user-info', JSON.stringify(data.data))
        navigate('/')
      }
    }
    

  }

const validateName = () => {

  let validate = false;

  if (!values.username) {
    setErrorName(messages.nameRequired)
    return
  } else {
    setErrorName('')
    validate = true
  }

  return validate
}

const validatePassword = () => {

  let validate = false;

  if (!values.password) {
    setErrorPassword(messages.passwordRequired)
  } else {
    setErrorPassword('')
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
              min="3"
            />
            <p style={style}>{errorName}</p>
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
            <p style={style}>{errorBackMsg}</p>
          </InputBox>

          <ButtonSubmit
            type='submit'
          >Login in</ButtonSubmit>
          <LoginBox>
            No tiene una cuenta
            <Link to="/register">
              Registrarse
            </Link>
          </LoginBox>
        </FieldForm>
      </Form>
    </FormContainer>
  </>
)
}

export default LoginComponent