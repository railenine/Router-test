import { Routes, Route } from "react-router-dom";

import Main from "./pages/main/Main";
import News from "./pages/news/News";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";

const Routed = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} exact/>
            <Route path='/news' element={<News />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default Routed;