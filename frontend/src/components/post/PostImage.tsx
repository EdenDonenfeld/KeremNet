import React from 'react';
import './PostImage.css';

interface Props {
    image: string;
}

const PostImage: React.FC<Props> = ({ image }) => {
    return (
        <div className="post-content">
            <div className="post-image">
                <img src={image} alt="Post content" className="post-image" />
            </div>
        </div>
    );
}

export default PostImage;