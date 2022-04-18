import React from 'react'
import Image from 'next/image'
import xboxLogo from '../../public/logos/xbox-logo.svg'
import moment from 'moment';

function Xbox(games) {
    const momentNow = moment({}).format();

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
                            // Title
                            const titleRegEx = game.title.replace(/[*]/g, '');

                            // Date
                            const date = game.date.split('–');
                           
                            const momentStart = moment(date[0], 'MM-DD').format();
                            const momentEnd = moment(date[1], 'MM-DD').format();

                            const startDate = momentNow >= momentStart ? 'now' : moment(momentStart).format('MMM DD');
                            const endDate = moment(momentEnd).format('MMM DD');
                            const formatDate = [startDate , endDate].join(' - ');

                            return (
                                <div className='img-card' key={index}>
                                    <img className='img' src={`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`} alt={game.imageAlt}/> 
                                    <span className='date'>{formatDate}</span>
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
