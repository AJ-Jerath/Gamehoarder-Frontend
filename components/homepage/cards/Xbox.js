import React from 'react'
import Image from 'next/image'
import xboxLogo from '../../../public/logos/xbox-logo.svg'
import moment from 'moment';

function Xbox(games) {
    const momentNow = moment({}).format();
    const gameServiceUrl = 'https://www.xbox.com/en-US/live/gold'

    return (
        <div id='xbox' className='basecard-container'>
            <div className='basecard'>
                <div className='card-left xbox-left'>
                    <div className='logo-container' title='Checkout this months games from Xbox Live'>
                        <a href={gameServiceUrl} target='_blank'>
                            <Image src={xboxLogo} />
                        </a>
                    </div>
                </div>
                <div className='card-right xbox-right'>
                    <div className='img-container'>
                        {games.xbox.arr.map((game, index) => {
                            // Title
                            const titleRegEx = game.title.replace(/[^A-Za-z0-9\s_]/g, '');

                            // Date
                            const date = game.date.split('–');
                           
                            const momentStart = moment(date[0], 'MM-DD').format();
                            const momentEnd = moment(date[1], 'MM-DD').format();

                            const startDate = momentNow >= momentStart ? 'now' : moment(momentStart).format('MMM DD');
                            const endDate = moment(momentEnd).format('MMM DD');
                            const formatDate = [startDate , endDate].join(' - ');

                            return (
                                <div className='img-card' key={index}>
                                    <div className='img-container'>
                                        <a href={gameServiceUrl} target='_blank'>
                                            <img className='img' src={`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`} alt={game.imageAlt}/>
                                        </a>
                                        <span className='date'>{formatDate}</span>
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

export default Xbox
