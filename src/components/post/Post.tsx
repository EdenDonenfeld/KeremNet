import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostLikesComments from './PostLikesComments';
import PostDescription from './PostDescription';

const Post: React.FC = () => {
    return (
        <div className="post-container">
            <PostHeader username="eden_donenfeld" />
            <PostContent image="dogs.jpg" />
            <PostLikesComments likes={150} comments={25} />
            <PostDescription text="Cute dogs in the park 🐕"/>
        </div>
    );
}

export default Post;