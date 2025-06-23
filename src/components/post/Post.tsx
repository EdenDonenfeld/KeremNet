import React from 'react';
import PostHeader from './PostHeader';
// import PostContent from './PostContent';
import PostLikesComments from './PostLikesComments';
import PostDescription from './PostDescription';
import './Post.css'; 

interface Props {
    username: string;
    text: string;
    likes: number;
    comments: number;
}

const Post: React.FC<Props> = ({ username, text, likes, comments }) => {
    return (
        <div className="post-container">
            <PostHeader username={username} />
            <PostDescription text={text}/>
            <PostLikesComments likes={likes} comments={comments} />
        </div>
    );
}

export default Post;
export type { Props as PostProps };