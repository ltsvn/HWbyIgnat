import React from 'react'
import s from './Message.module.css'

export type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message({avatar, name, message, time}: messagePropsType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={avatar} alt={'Avatar'}/>
            <div className={s.angle}/>
            <div className={s.content}>
                <div className={s.name}>
                    {name}
                </div>
                <div className={s.text}>
                    {message}
                </div>
                <div className={s.time}>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default Message
