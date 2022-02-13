import React from 'react'
import Image from 'next/image'
import epicLogo from '../../public/logos/epic-games-logo.png'

function Epic() {
    return (
        <div id='epic' className='basecard-container'>
            <div className='basecard'>
                <div className='card-left epic-left'>
                    <div className='logo-container'>
                        <Image src={epicLogo} />
                    </div>
                </div>
                <div className='card-right epic-right'>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg" />
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Warzone-285x380.jpg" />
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg" />
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Warzone-285x380.jpg" />
                </div>
                <a className='link' href="#">Epic Games</a>
            </div>
        </div>
    )
}

export default Epic
