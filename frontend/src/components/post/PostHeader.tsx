import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useImageValidation } from '../../hooks/useImageValidation';
import './PostHeader.css';

interface Props {
    username: string;
    date: string;
    userId: string;
}

const PostHeader: React.FC<Props> = ({ username, date, userId }) => {
    const { imageExists } = useImageValidation(`/images/users/${userId}.png`);

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
                {!imageExists ? (
                    <FontAwesomeIcon icon={faUser} className="user-icon" />
                ) : (
                    <img
                        src={`/images/users/${userId}.png`}
                        alt={`${username}'s profile`}
                        className="profile-image"
                    />
                )}
                <span className="user-name">{username}</span>
            </div>
            <div className="time">
                <p className="date">{formattedDate}</p>
                <p className="hour">{formattedTime}</p>
            </div>
        </div>
    );
};

export default PostHeader;
