import React, {useContext} from "react";
import {Redirect, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./Navigation";
import {SiteRouteContext} from "../../Contexts/SiteRouteContext";

function Navigator() {
    const routes = useContext(SiteRouteContext);
    const mapped = routes.map(item => {
        if (item.redirect){
            return (
                <Route exact={item.exact} path={item.path}>
                    <Redirect to={item.redirect}/>
                </Route>
            );
        }
        return (
            <Route exact={item.exact} path={item.path}>
                {item.render}
            </Route>
        )
    })
    return (
        <Router>
            <Navigation/>
            <Switch>
                {mapped}
                {/*<Route exact path={'/'}>*/}
                {/*    <Redirect to={'/home'}/>*/}
                {/*</Route>*/}
                {/*<Route path={'/home'}>*/}
                {/*    <HomePage/>*/}
                {/*</Route>*/}
                {/*<Route path={'/projects'}>*/}
                {/*    <ProjectsPage/>*/}
                {/*</Route>*/}
                {/*<Route path={'/aboutus'}>*/}
                {/*    <h1>About Us</h1>*/}
                {/*</Route>*/}
                {/*<Route path={'/contact'}>*/}
                {/*    <h1>Contact</h1>*/}
                {/*</Route>*/}
                {/*<Route path={'/language'}>*/}
                {/*    <LanguageSelector/>*/}
                {/*</Route>*/}
            </Switch>
        </Router>
    )
}

export default Navigator;