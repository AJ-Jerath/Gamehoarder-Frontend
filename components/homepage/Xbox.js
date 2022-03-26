import React from 'react'
import Image from 'next/image'
import xboxLogo from '../../public/logos/xbox-logo.svg'
import moment from 'moment';

function Xbox(games) {
    const now = moment({}).format();

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

                            const dateStart = game.date.split('–');
                            const formatDateStart = moment(dateStart[0], 'MM-DD').format();
                            const isNow = now >= formatDateStart ? 'now' : dateStart[0];
                            const formatDate = [isNow, dateStart[1]].join(' -');


                            return (
                                <div className='img-card'>
                                    <img className='img' key={index} src={`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`} alt={game.imageAlt}/> 
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
