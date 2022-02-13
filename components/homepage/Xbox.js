import React from 'react'
import Image from 'next/image'
import xboxLogo from '../../public/logos/xbox-logo.svg'

function Xbox() {
    return (
        <div id='xbox' className='basecard-container'>
            <div className='basecard'>
                <div className='card-left xbox-left'>
                    <div className='logo-container'>
                        <Image src={xboxLogo} />
                    </div>
                </div>
                <div className='card-right xbox-right'>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg" />
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Warzone-285x380.jpg" />
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg" />
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Warzone-285x380.jpg" />
                </div>
                <a className='link' href="#">Xbox Games</a>
            </div>
        </div>
    )
}

export default Xbox
