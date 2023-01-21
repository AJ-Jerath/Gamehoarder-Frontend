import React, { useState } from 'react'
import Image from 'next/image'
import epicLogo from '../../public/logos/epic-games-logo.png'
import moment from 'moment';

function Epic(games) {
    const momentNow = moment({}).format();

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
                            const { date, keyImages } = game;

                            if(!date) {
                                return;
                            }

                            const [boxArt, setBoxArt] = useState([]);

                            // Title
                            const titleRegEx = game.title.replace(/[*®]/g, '');

                            // Image
                            const image = (keyImages.filter(image => image.type === "Thumbnail"))[0].url;

                            // Date
                            const momentStart = moment(date.startDate).format('MM-DD');

                            const startDate = momentNow >= momentStart ? 'now' : moment(momentStart).format('MMM DD');
                            const endDate = moment(date.endDate).format('MMM DD');
                            const formatDate = `${startDate} - ${endDate}`;

                            // Check If Image is 404
                            fetch(`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`).then((res) => {
                                if (res.url.includes("404_boxart")) {
                                    setBoxArt(image);
                                } else {
                                    setBoxArt(`https://static-cdn.jtvnw.net/ttv-boxart/${titleRegEx}-285x380.jpg`);
                                }
                            });

                            return (
                                <div className='img-card' key={index}>
                                    <div className='img-container'>
                                        <img className='img' src={boxArt} alt={game.imageAlt}/>
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

export default Epic
