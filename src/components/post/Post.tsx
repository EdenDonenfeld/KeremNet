import React from 'react';
import PostHeader from './PostHeader';
// import PostContent from './PostContent';
import PostLikesComments from './PostLikesComments';
import PostDescription from './PostDescription';
import './Post.css'; 

interface Props {
    username: string;
    text: string;
}

const Post: React.FC<Props> = ({ username, text }) => {
    return (
        <div className="post-container">
            <PostHeader username={username} />
            <PostDescription text={text}/>
            <PostLikesComments likes={150} comments={25} />
        </div>
    );
}

export default Post;