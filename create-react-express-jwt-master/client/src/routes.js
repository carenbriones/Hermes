
import Buttons from "views/components/Buttons.jsx";
import Calendar from "views/Calendar.jsx";
import Charts from "views/Charts.jsx";
import Dashboard from "views/Dashboard.jsx";
import ExtendedForms from "views/forms/ExtendedForms.jsx";
import ExtendedTables from "views/tables/ExtendedTables.jsx";
import FullScreenMap from "views/maps/FullScreenMap.jsx";
import GoogleMaps from "views/maps/GoogleMaps.jsx";
import GridSystem from "views/components/GridSystem.jsx";
import Icons from "views/components/Icons.jsx";
import LockScreen from "views/pages/LockScreen.jsx";
import Login from "views/pages/Login.jsx";
import Notifications from "views/components/Notifications.jsx";
import Panels from "views/components/Panels.jsx";
import ReactTables from "views/tables/ReactTables.jsx";
import Register from "views/pages/Register.jsx";
import RegularForms from "views/forms/RegularForms.jsx";
import RegularTables from "views/tables/RegularTables.jsx";
import SweetAlert from "views/components/SweetAlert.jsx";
import Timeline from "views/pages/Timeline.jsx";
import Typography from "views/components/Typography.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import ValidationForms from "views/forms/ValidationForms.jsx";
import VectorMap from "views/maps/VectorMap.jsx";
import Widgets from "views/Widgets.jsx";
import Wizard from "views/forms/Wizard.jsx";
import ChildPage from "components/ChildPage/ChildPage";
import OneResource from "components/OneResource/OneResource"
import Resources from "views/pages/Resources";
import AddChild from "./components/AddChild/AddChild";
import NewSession from "./components/NewSession/NewSession";
import ChildTable from "./views/tables/ChildTable";
import Therapists from  "views/pages/Therapists";
import ViewSession from "views/pages/ViewSession";


const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
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
        name: "View Session",
        mini: "VS",
        component: ViewSession,
        layout: "/admin",
        invisible: true
      }
    ]
  },
  {
    collapse: true,
    name: "Resources",
    icon: "nc-icon nc-single-copy-04",
    state: "resourcesCollapse",
    views: [
      {
        path: "/resources",
        name: "All Resources",
        mini: "AR",
        component: Resources,
        layout: "/admin"
      },
      {
        path: "/session/1",
        name: "Session 1",
        mini: "RT",
        component: OneResource,
        layout: "/admin"
      },
      {
        path: "/session/2",
        name: "Session 2",
        mini: "ET",
        component: OneResource,
        layout: "/admin"
      },
      {
        path: "/session/3",
        name: "Session 3",
        mini: "RT",
        component: OneResource,
        layout: "/admin"
      }
    ]
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
    collapse: true,
    name: "Other",
    icon: "nc-icon nc-book-bookmark",
    state: "pagesCollapse",
    views: [
      {
        path: "/timeline",
        name: "Timeline",
        mini: "T",
        component: Timeline,
        layout: "/admin"
      },
      {
        path: "/login",
        name: "Login",
        mini: "L",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/register",
        name: "Register",
        mini: "R",
        component: Register,
        layout: "/auth"
      },
      {
        path: "/lock-screen",
        name: "LockScreen",
        mini: "LS",
        component: LockScreen,
        layout: "/auth"
      },
      {
        path: "/user-profile",
        name: "UserProfile",
        mini: "UP",
        component: UserProfile,
        layout: "/admin"
      },
      {
        path: "/buttons",
        name: "Buttons",
        mini: "B",
        invisible: true,
        component: Buttons,
        layout: "/admin"
      },
      {
        path: "/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem,
        layout: "/admin"
      },
      {
        path: "/panels",
        name: "Panels",
        mini: "P",
        component: Panels,
        layout: "/admin"
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        mini: "I",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        mini: "T",
        component: Typography,
        layout: "/admin"
      },
      {
        path: "/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms,
        layout: "/admin"
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms,
        layout: "/admin"
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms,
        layout: "/admin"
      },
      {
        path: "/wizard",
        name: "Wizard",
        mini: "W",
        component: Wizard,
        layout: "/admin"
      },
      {
        path: "/widgets",
        name: "Widgets",
        icon: "nc-icon nc-box",
        component: Widgets,
        layout: "/admin"
      },
      {
        path: "/charts",
        name: "Charts",
        icon: "nc-icon nc-chart-bar-32",
        component: Charts,
        layout: "/admin"
      },
    ]
  }
];

export default routes;
