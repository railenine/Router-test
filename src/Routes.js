import { Switch, Route } from "react-router-dom";

import Main from "./pages/main/Main";
import News from "./pages/news/News";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/news' component={News} />
            <Route path='/profile' component={Profile} />
            <Route path='/login' component={Login} />
        </Switch>
    )
}

export default Routes;