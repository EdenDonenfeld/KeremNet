import React from 'react';
import './PostHeader.css';

interface Props {
    username: string;
    date: string;
}

const PostHeader: React.FC<Props> = ({ username, date }) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formattedTime = new Date(date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    return (
        <div className="post-header">
            <div className="user-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="1rem" width="1rem" className="user-icon">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                </svg>                       
                <span className="user-name">{username}</span>
            </div>
            <div className="time">
                <p className="date">{formattedDate}</p>
                <p className="hour">{formattedTime}</p>
            </div>
        </div>
    );
}

export default PostHeader;