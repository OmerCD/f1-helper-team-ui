import React, {createContext} from "react";
import ProjectsPage from "../Pages/Projects/ProjectsPage";
import LanguageSelector from "../Components/Language/LanguageSelector";
import HomePage from "../Pages/Home/HomePage";
import ContactPage from "../Pages/Contact/ContactPage";

const SiteRouteContext = createContext();
const routes = [
    {
        path:'/projects',
        render:<ProjectsPage/>
    },
    {
        path:'/home',
        render:<HomePage/>
    },
    {
        path:'/',
        render:<HomePage/>,
        exact: true,
        redirect:'/home'
    },
    {
        path: '/aboutus',
        render: <h1>About Us</h1>
    },
    {
        path: '/contact',
        render: <ContactPage/>
    },
    {
        path: '/language',
        render: <LanguageSelector/>
    }
]

const SiteRouteProvider = ({children}) => { return (
    <SiteRouteContext.Provider value={routes}>
        {children}
    </SiteRouteContext.Provider>
)}
export {SiteRouteProvider, SiteRouteContext}
