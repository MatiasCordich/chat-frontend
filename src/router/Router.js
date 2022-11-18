import {BrowserRouter, Routes, Route} from "react-router-dom"
import SetAvatar from "../pages/avatar/SetAvatar"
import ChatComponent from "../pages/chat/Chat"
import LoginComponent from "../pages/login/Login"
import RegisterComponent from "../pages/register/Register"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<RegisterComponent/>}/>
            <Route path="/login" element={<LoginComponent/>}/>
            <Route path="/setAvatar" element={<SetAvatar/>}/>
            <Route path="/" element={<ChatComponent/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router