import React from 'react';
import './PostDescription.css';

interface Props {
    text: string;
}

const PostDescription: React.FC<Props> = ({ text }) => {
    return (
        <div className="post-description">
            <p className="description-text">{text}</p>
        </div>
    );
}

export default PostDescription;