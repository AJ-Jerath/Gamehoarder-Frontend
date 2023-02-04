import React from 'react'
import Image from 'next/image'
import playstationLogo from '../../../public/logos/playstation-logo.svg'

function Playstation(games) {
     const gameServiceUrl = 'https://www.playstation.com/en-us/ps-plus/whats-new/'

    return (
        <div id='playstation' className='basecard-container'>
            <div className='basecard'>
                <div className='card-left playstation-left'>
                    <div className='logo-container' title='Checkout this months games from Playstation Plus'>
                        <a href={gameServiceUrl} target='_blank'>
                            <Image src={playstationLogo} />
                        </a>
                    </div>
                </div>
                <div className='card-right playstation-right'>
                    <div className='img-container'>
                        {games.playstation.arr.map((game, index) => {
                            const titleRegEx = game.title.replace(/[^A-Za-z0-9\s_]/g, '');
                            return (
                                <div className='img-card' key={index}>
                                    <div className='img-container'>
                                        <a href={gameServiceUrl} target='_blank'>
                                            <img className='img' src={`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`} alt={game.imageAlt}/>
                                        </a>
                                    </div>
                                    <h3>{game.title.toLowerCase()}</h3>
                                </div>
                            ) 
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playstation
