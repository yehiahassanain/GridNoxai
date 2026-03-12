import React, { useEffect, useState } from 'react'
import Style from './Home.module.css'
import video from '../../assets/images/video.mp4'

export default function Home() {
    return (
        <section  >
            <video 
                className={Style.backgroundVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src={video} type="video/mp4" />
            </video>
            <div className={Style.overlay}></div>
            <div className={Style.contentContainer}>
                <h1 className={Style.mainHeading}>Securing the Digital Future</h1>
                <p className={Style.subHeading}>Advanced Threat Intelligence & Cybersecurity Solutions</p>
                <button className={Style.ctaButton}>Discover Our Solutions</button>
            </div>
        </section>
    );
}


