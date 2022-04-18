import React from 'react'
import Image from 'next/image'
import gamepadLogo from '../../public/svgs/gamepad.svg'

function Hero() {
    return (
        <section id="hero">
            <video autoPlay={true} muted loop className="video-background">
                <source src="/backgrounds/background-glitch.mp4" type="video/mp4" />
            </video> 
            <div className="gamepad">
                <Image src={gamepadLogo} />
            </div>
            <div className="text-container">
                <h1>Current Games From</h1>
                <p>Epic / Xbox / Playstation</p>
                <p>and more</p>
            </div>
        </section>
    )
}

export default Hero
