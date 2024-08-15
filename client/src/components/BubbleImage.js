import React from 'react'
import { API_URL } from '../constants.js'
import './Bubble.css';

const BubbleImage = ({ message }) => {
    
    message = {
        chat_id: null,
        user_id: null,
        message: null,
        img_url: "../assets/smile.svg",
        created_at: "6:44 PM"
    };

}

export default BubbleImage;