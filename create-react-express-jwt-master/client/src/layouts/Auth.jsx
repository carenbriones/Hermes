import React from "react";
import { Route, Switch } from "react-router-dom";

import AuthNavbar from "../components/Navbar/AuthNavbar";
import Footer from "../components/Footer/Footer";

import routes from "../routes.js";

// var ps;

class Pages extends React.Component {
    //   componentDidMount() {
    //     if (navigator.platform.indexOf("Win") > -1) {
    //       ps = new PerfectScrollbar(this.refs.fullPages);
    //     }
    //   }
    //   componentWillUnmount() {
    //     if (navigator.platform.indexOf("Win") > -1) {
    //       ps.destroy();
    //     }
    //   }
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return this.getRoutes(prop.views);
            }
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    render() {
        return (
            <>
                <AuthNavbar />
                <div className="wrapper wrapper-full-page" ref="fullPages">
                    <div className="full-page section-image">
                        <Switch>{this.getRoutes(routes)}</Switch>
                        <Footer fluid />
                    </div>
                </div>
            </>
        );
    }
}

export default Pages;