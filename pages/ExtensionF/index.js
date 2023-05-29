


import React, { useState } from "react";

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaGooglePlay, FaTwitter, } from "react-icons/fa";
import Tilty from 'react-tilty';
import { SiFaceit } from "react-icons/si";
import fvisuals1 from '/public/images/fvisuals1.png'
import fvisuals2 from '/public/images/fvisuals2.png'
import fvisuals3 from '/public/images/fvisuals3.png'
import Image from "next/image";

const ExtensionF = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const OffcanvasHandleClose = () => setShowOffcanvas(false);
    const OffcanvasHandleShow = () => setShowOffcanvas(true);



    return (
        <>
            <header className="header axil-header header-style-3">
                
                    <div className="container">
                       
                          
                            <div className="header-action ">
                                <ul className="list-unstyled">
                                    <li className="header-social-link">
                                        <ul className="social-icon-list list-unstyled">
                                            <li>
                                                <a
                                                    href="https://chrome.google.com/webstore/detail/faceit-visuals/ngcickocpcongeagbpkejabhkgmcildo/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaGooglePlay /> Install
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://twitter.com/shadigm_"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaTwitter />
                                                    Follow{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.faceit.com/en/inv/o24rI8V"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <SiFaceit /> Join Clan{" "}
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="sidemenu-btn">
                                      
                                    </li>
                                    <li className="my_switcher d-block d-lg-none">
                                        
                                    </li>
                                </ul>
                            </div>
                        
                    </div>
                    <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={100}>
                            <span className="subtitle">'shadi' </span>
                        </AnimationOnScroll>
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <h1 className="title">Faceit Visuals Extension</h1>
                        </AnimationOnScroll>
                       
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-thumbnail">
                    <div className="large-thumb">
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <Tilty perspective={2000} reset={false}>
                            <Image src={fvisuals1} alt=""/>
                            </Tilty>
                        </AnimationOnScroll>
                        
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <Tilty perspective={2000} reset={false}>
                            <Image src={fvisuals2} alt=""/>
                            </Tilty>
                        </AnimationOnScroll>
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                            <Tilty perspective={2000} reset={false}>
                            
                            <h1 className="title"> Steam Profiles</h1>
                            <Image src={fvisuals3} alt=""/>
                            </Tilty>
                        </AnimationOnScroll>
                    </div>
                    </div>
                </div>
                </div>
            </div>
               
            </header>
           
        </>
    );
};

export default ExtensionF;
