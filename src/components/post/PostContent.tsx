import React from 'react';
import './PostContent.css';

interface Props {
    image: string;
}

const PostContent: React.FC<Props> = ({ image }) => {
    return (
        <div className="post-content">
            <div className="post-image">
                <img src={image} alt="Post content" className="image"/>
            </div>
        </div>
    );
}

export default PostContent;