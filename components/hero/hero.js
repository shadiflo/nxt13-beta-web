import React from "react";
import NavLink from 'next/link'




const Hero =() => {
    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>TENARIS. INCOMING</h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>shadi.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="social-link">
                <ul>
                    <li><NavLink href="/">Social</NavLink></li>
                    <li><NavLink href="https://twitter.com/shadigm_" target="_blank">Twitter</NavLink></li>
                    <li><NavLink href="https://www.faceit.com/en/organizers/e9891e09-318b-4309-babd-f4c87c4fbbb5/Tenaris%20esports" target="_blank">Faceit</NavLink></li>
                   
                </ul>
            </div>
            <div className="visible-text">
                <h1>TENARIS</h1>
                
            </div>
        </section>
    )
}

export default Hero;