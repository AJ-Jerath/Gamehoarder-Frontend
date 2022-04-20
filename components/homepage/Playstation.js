import React from 'react'
import Image from 'next/image'
import playstationLogo from '../../public/logos/playstation-logo.svg'

function Playstation(games) {
    return (
        <div id='playstation' className='basecard-container'>
            <div className='basecard'>
                <div className='card-left playstation-left'>
                    <div className='logo-container'>
                        <Image src={playstationLogo} />
                    </div>
                </div>
                <div className='card-right playstation-right'>
                    <div className='img-container'>
                        {games.playstation.arr.map((game, index) => {
                            const titleRegEx = game.title.replace(/[*®]/g, '');
                            return (
                                <div className='img-card' key={index}>
                                    <img className='img' src={`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`} alt={game.imageAlt}/> 
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
