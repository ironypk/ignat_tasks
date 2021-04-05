import React from 'react'
import Message from "./Message";

export type messageDataType = {
    avatar:string,
    name:string,
    message:string,
    time:string
}

const messageData:messageDataType = {
    avatar: 'https://cs5.pikabu.ru/post_img/big/2015/03/25/5/1427266313_681511633.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
