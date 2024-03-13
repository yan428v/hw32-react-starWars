import React from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";

const Main = ({currentPage}) => {
    switch (currentPage) {
        case "Home" :
            return (
            <div>
                <Home/>
            </div>
        );
        case "AboutMe" :
            return (
            <div>
                <AboutMe/>
            </div>
        );
        case "StarWars" :
            return (
            <div>
                <StarWars/>
            </div>
        );
        case "Contact" :
            return (
            <div>
                <Contact/>
            </div>
        );
        default :
            return (
                <div>
                    <h2>
                        This page is not found!
                    </h2>
                </div>
            )
    }
}

export default Main;