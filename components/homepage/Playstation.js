import React from 'react'
import Image from 'next/image'
import playstationLogo from '../../public/logos/playstation-logo.svg'

function Playstation() {
    return (
        <div id='playstation' className='basecard-container'>
            <div className='basecard'>
                <div className='card-left playstation-left'>
                    <div className='logo-container'>
                        <Image src={playstationLogo} />
                    </div>
                </div>
                <div className='card-right playstation-right'>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg" />
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Warzone-285x380.jpg" />
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg" />
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Warzone-285x380.jpg" />
                </div>
                <a className='link' href="#">Playstation Games</a>
            </div>
        </div>
    )
}

export default Playstation
