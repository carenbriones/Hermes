import Calendar from "views/Calendar.jsx";
import Login from "views/pages/Login.jsx";
import Register from "views/pages/Register.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import ChildPage from "components/ChildPage/ChildPage";
import OneResource from "components/OneResource/OneResource"
import Resources from "views/pages/Resources";
import AddChild from "./components/AddChild/AddChild";
import NewSession from "./components/NewSession/NewSession";
import ChildTable from "./views/tables/ChildTable";
import Therapists from "views/pages/Therapists";
import ViewSession from "views/pages/ViewSession";
import About from "views/pages/About.jsx";
import DevTeam from "views/pages/DevTeam";

const routes = [
  
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "nc-icon nc-circle-10",
    component: UserProfile,
    layout: "/admin"
  },

  {
    collapse: true,
    name: "Children",
    icon: "nc-icon nc-single-02",
    state: "childrenCollapse",
    views: [
      {
        path: "/addChild",
        name: "Add Child",
        mini: "AC",
        component: AddChild,
        layout: "/admin"
      },
      {
        path: "/viewChildren",
        name: "View Children",
        mini: "VC",
        component: ChildTable,
        layout: "/admin"
      },
      {
        path: "/newSession/:id",
        name: "New Session",
        mini: "NS",
        component: NewSession,
        layout: "/admin",
        invisible: true
      },
      {
        path: "/child/:id",
        name: "Child Info",
        mini: "NS",
        component: ChildPage,
        layout: "/admin",
        invisible: true
      },
      {
        path: "/viewSession/:id",
        name: "Child Info",
        mini: "NS",
        component: ViewSession,
        layout: "/admin",
        invisible: true
      }

    ]
  },

  {
    path: "/resources",
    name: "Resources",
    icon: "nc-icon nc-single-copy-04",
    component: Resources,
    layout: "/admin"
  },
  {
    path: "/resource/:id",
    name: "Resource",
    component: OneResource,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/about",
    name: "About",
    component: About,
    layout: "/auth",
    invisible: true
  },
  
  
  {
    path: "/therapists",
    name: "Therapists",
    icon: "nc-icon nc-badge",
    component: Therapists,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "nc-icon nc-calendar-60",
    component: Calendar,
    layout: "/admin"
  },

  {
    path: "/dev-team",
    name: "Dev Team",
    icon: "nc-icon nc-atom",
    component: DevTeam,
    layout: "/admin",
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth",
    invisible: true
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: "/auth",
    invisible: true
  }
  

]


export default routes;
