import React from 'react'
import { API_URL } from '../constants.js'
import './Bubble.css';

// last: Boolean if last in sequence
const BubbleText = ({ curUser, message, last }) => {

    message = {
        chat_id: null,
        user_id: null,
        message: "test",
        img_url: null,
        created_at: "6:44 PM"
    };

    return (
        <>
        {
            message?.message ? (
                <div className={'bubble Sender'}>
                    {message.message}
                </div>
            ) : (
                <></>
            )
        }
        </>
    )
}

export default BubbleText;