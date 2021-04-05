import React from 'react'

import style from './Message.module.css'

import {messageDataType} from "./HW1";

function Message(props:messageDataType) {
    const {avatar,name,message,time} = props
    return (
        <div className={style.message}>
            <div className={style.avatar_column}>
                <div className={style.image_wrapper}>
                    <img  className={style.image} src={avatar} alt="123"/>
                </div>
            </div>
            <div className={style.description_column}>
                <div className={style.description_container}>
                    <div className={style.message_name}>{name}</div>
                    <div className={style.message_text}>{message}</div>
                    <div className={style.message_time}>{time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
