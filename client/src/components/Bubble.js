import React, { useRef, useEffect, useState } from 'react'
import { API_URL } from '../constants'
import './Bubble.css';

const Bubble = ({ message }) => {
    const containerRef = useRef(null);
    const bubbleRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState('auto');
    const [user, setUser] = useState();

    useEffect(() => {
        const adjustContainerHeight = () => {
            if (bubbleRef.current && containerRef.current) {
                const bubbleHeight = bubbleRef.current.offsetHeight;
                
                setContainerHeight(bubbleHeight + 5 + 'px');
            }
        };
        
        const getUser = async () => {
            const response = await fetch(API_URL + '/api/users/login/success', { credentials: 'include' });
            const data = await response.json();
            setUser(data);
        }

        adjustContainerHeight();
        getUser();
        window.addEventListener('resize', adjustContainerHeight);
        return () => window.removeEventListener('resize', adjustContainerHeight);
    }, []);

    const context = user ? (user.id === message.user_id ? "Sender" : "Receiver") : "Receiver";
    return (
        <div className="relativeContainer" ref={containerRef} style={{ height: containerHeight }}>
        {
            message?.message ? (
                <div className={"bubble Text " + context} ref={bubbleRef}>
                    { message.message }
                </div>
            ) : (
                <></>
            )
        }
        </div>
    )
}

export default Bubble;