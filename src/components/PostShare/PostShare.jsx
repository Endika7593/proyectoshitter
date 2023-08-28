import React from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import './PostShare.css'
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
const PostShare = () => {
    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text"
                    placeholder="¿Qué pasa?" />
                <div className="postOptions">
                    <div className="option" 
                    style={{color: "var(--photo)"}}
                    >
                        <UilScenery />
                        Foto
                    </div>
                    <div className="option"
                    style={{color: "var(--video)"}}>
                        <UilPlayCircle />
                        Video
                    </div>{" "}
                    <div className="option"
                    style={{color: "var(--location)"}}>
                        <UilLocationPoint />
                        Lugar
                    </div>{" "}
                    <div className="option"
                    style={{color: "var(--schedule)"}}>
                        <UilSchedule />
                        Evento
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostShare;
