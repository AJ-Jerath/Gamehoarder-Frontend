import React from 'react'
import Image from 'next/image'
import epicLogo from '../../public/logos/epic-games-logo.png'

function Epic(games) {
    return (
        <div id='epic' className='basecard-container'>
            <div className='basecard'>
                <div className='card-left epic-left'>
                    <div className='logo-container'>
                        <Image src={epicLogo} />
                    </div>
                </div>
                <div className='card-right epic-right'>
                    <div className='img-container'>
                        {games.epic.arr.map((game, index) => {
                            const titleRegEx = game.title.replace(/[*]/g, '');
                            const dateRegEx = game.date.split('at')[0].toLowerCase().replace(/free|00:00/g, '');

                            return (
                                <div className='img-card'>
                                    <img className='img' key={index} src={`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`} alt={game.imageAlt}/>
                                    <span className='date'>{dateRegEx}</span>
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

export default Epic
