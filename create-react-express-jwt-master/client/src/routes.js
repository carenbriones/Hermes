
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"

const routes = [
    {
        path: "/login",
        name: "Login",
        mini: "L",
        component: Login,
        layout: "/auth"
    },
    {
        path: "/signup",
        name: "Signup",
        mini: "S",
        component: Signup,
        layout: "/auth"
    },
    {
        path: "/profile",
        name: "Profile",
        mini: "UP",
        component: Profile,
        layout: "/User"
    }
]
  
export default routes;
