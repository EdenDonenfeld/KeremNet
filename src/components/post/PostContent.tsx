import React from 'react';

interface Props {
    image: string;
}

const PostContent: React.FC<Props> = ({ image }) => {
    return (
        <div className="post-content">
            <div className="post-image">
                <img src={image} alt="Post content" />
            </div>
        </div>
    );
}

export default PostContent;