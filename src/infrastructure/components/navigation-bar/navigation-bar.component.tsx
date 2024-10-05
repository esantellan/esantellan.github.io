import React from "react";

import './styles.css';

import { SocialLink } from "../social-link";

import Mate from "../../icons/mate.svg";
import GitHub from '../../icons/github.svg';
import Linkedin from '../../icons/linkedin.svg';


function NavigationBar() {
    return <div className="navigationBar">
        <div className="titleContainer">
            <img className="navBarLogo" src={Mate} height="50" />
            <span className="navBarTitle">EmilianoSantellan</span>
        </div>

        <div className="navigationLinks">
            <div className="socialsContainer">
                <SocialLink
                    title="Linkedin"
                    image={Linkedin}
                    imageAltText="My Linkedin"
                    href="https://ar.linkedin.com/in/emiliano-santellan-54849899"
                />
                <SocialLink
                    title="GitHub"
                    image={GitHub}
                    imageAltText="My GitHub"
                    href="https://github.com/esantellan"
                />
            </div>

            <div className="navSeparator"></div>

            <div className="pageSectionsContainer">
                <a className="pageSectionLink" href="#aboutSection">About Me</a>
                {/* <a className="pageSectionLink" href="#projectsSection">Projects</a> */}
                <a className="pageSectionLink" href="#contactSection">Contact</a>
            </div>
        </div>
    </div>;
}

export default NavigationBar;