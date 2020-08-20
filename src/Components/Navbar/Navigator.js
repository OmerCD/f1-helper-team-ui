import React from "react";
import {Redirect,BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../../Pages/Home/HomePage";
import LanguageSelector from "../Language/LanguageSelector";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import ProjectsPage from "../../Pages/Projects/ProjectsPage";

function Navigator() {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <ParallaxProvider>
                    <Route exact path={'/'}>
                        <Redirect to={'/home'}/>
                    </Route>
                    <Route path={'/home'}>
                        <HomePage/>
                    </Route>
                    <Route path={'/projects'}>
                        <ProjectsPage/>
                    </Route>
                    <Route path={'/aboutus'}>
                        <h1>About Us</h1>
                    </Route>
                    <Route path={'/contact'}>
                        <h1>Contact</h1>
                    </Route>
                    <Route path={'/language'}>
                        <LanguageSelector/>
                    </Route>
                </ParallaxProvider>
            </Switch>
        </Router>
    )
}

export default Navigator;