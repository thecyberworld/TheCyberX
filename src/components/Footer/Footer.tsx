import React from 'react';
import {FooterContainer} from "./FooterElements";

const Footer = (): JSX.Element => {
    return (
        <FooterContainer>
            <div className='footer'>
            <a href="https://twitter.com/thecyberw0rld" target="_blank"><i className="fa-brands fa-square-twitter"></i></a>
            <a href="https://github.com/thecyberworld/support/issues/new?assignees=&labels=invite+me+to+the+organisation&template=invitation.yml&title=Please+invite+me+to+the+GitHub+Community+Organization" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.facebook.com/thecyberw0rld" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/company/thecyberw0rld/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/thecyberw0rld" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://t.me/thecyberw0rld" target="_blank"><i className="fa-brands fa-telegram"></i></a>
            <a href="https://discord.gg/QHBPq6xP5p" target="_blank"><i className="fa-brands fa-discord"></i></a>
            </div>
        </FooterContainer>
    );
};

export default Footer;
