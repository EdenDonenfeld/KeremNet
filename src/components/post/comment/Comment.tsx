import React from 'react';
import './Comment.css';

interface Props {
    text: string;
    username: string;
}

const Comment: React.FC<Props> = ({ text, username }) => {
    return (
        <div className="comment-container">
            <div className="comment-header">
                <p className="comment-username">{username}:</p>
            </div>
            <p className="comment-text">{text}</p>
        </div>
    );
}

export default Comment;
export type { Props as CommentProps };