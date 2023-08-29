import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Tu información</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' />
                </div>
            </div>



            <div className="info">
                <span>
                    <b>Status: </b>
                </span>
                <span>En una relación</span>
            </div>

            <div className="info">
                <span>
                    <b>Vive en: </b>
                </span>
                <span>Bilbao</span>
            </div>

            <div className="info">
                <span>
                    <b>Trabaja en: </b>
                </span>
                <span>The Bridge</span>
            </div>


            <button className="button logout-button">Logout</button>
        </div>
    )
}

export default InfoCard
