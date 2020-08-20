import React from "react";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {SettingsContext} from "../../Contexts/SettingsContext";

const ParallaxBackground = ({offset}) => (
    <ParallaxLayer offset={offset} speed={0.05}
                   style={{backgroundImage: 'url("https://picsum.photos/800/600")', backgroundSize:'cover'}}>
    </ParallaxLayer>
)
const ParallaxImage = ({offset}) => (
    <ParallaxLayer offset={offset} speed={0.3}>
        <img src={"https://picsum.photos/200/200"} style={{float:'right'}}/>
    </ParallaxLayer>
)


function ProjectsPage() {
    const {navbarHeight} = React.useContext(SettingsContext);
    let reference;
    const ParallaxSpring = (
        <Parallax pages={3} vertical ref={ref => reference = ref} style={{height: `calc(100% - ${navbarHeight})`}}>
            {Array.from(Array(3).keys()).map(i => <ParallaxBackground offset={i}/>)}
            {Array.from(Array(3).keys()).map(i => <ParallaxImage offset={i}/>)}
        </Parallax>
    )
    return (
        <>
            {ParallaxSpring}
        </>
    )
}

export default ProjectsPage;