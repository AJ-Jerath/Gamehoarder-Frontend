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
                    {games.epic.arr.map((game, index) => {
                        const titleRegEx = game.title.replace(/[*]/g, '');
                        return <img key={index} src={`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`} />  
                    })}
                </div>
                <a className='link' href="#">Epic Games</a>
            </div>
        </div>
    )
}

export default Epic
