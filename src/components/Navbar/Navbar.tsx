import React from 'react';
import {NavbarContainer, LogoContainer, GitHubIcon, Logo, NavContent} from "./NavbarElements";
import logo from "../../assets/thecyberworld-green01.png"
import {BsGithub} from 'react-icons/bs';

const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo src={logo} alt={"thecyberworld-logo"}/>
            </LogoContainer>

            <NavContent>
                <h3>ThecyberX</h3>
            </NavContent>

            <GitHubIcon>
                <BsGithub/>
            </GitHubIcon>
        </NavbarContainer>
    );
};

export default Navbar;
