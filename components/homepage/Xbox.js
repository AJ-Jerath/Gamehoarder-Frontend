import React from 'react'
import Image from 'next/image'
import xboxLogo from '../../public/logos/xbox-logo.svg'

function Xbox(games) {
    return (
        <div id='xbox' className='basecard-container'>
            <div className='basecard'>
                <div className='card-left xbox-left'>
                    <div className='logo-container'>
                        <Image src={xboxLogo} />
                    </div>
                </div>
                <div className='card-right xbox-right'>
                    <div className='img-container'>
                        {games.xbox.arr.map((game, index) => {
                            const titleRegEx = game.title.replace(/[*]/g, '');
                            return (
                                <div className='img-card'>
                                    <img class='img' key={index} src={`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`} alt={game.imageAlt}/> 
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

export default Xbox
