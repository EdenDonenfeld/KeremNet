import React, { useState } from 'react';
import PostHeader from './PostHeader';
import PostLikesComments from './PostLikesComments';
import PostDescription from './PostDescription';
import { CommentProps } from './comment/Comment';
import './Post.css'; 

interface Props {
    username: string;
    text: string;
    date: string;
    likes: number;
    comments: CommentProps[];
}

const Post: React.FC<Props> = ({ username, text, date, likes, comments }) => {
    const [isCommentsVisible, setCommentsVisible] = useState(false);
    return (
        <div className="post-container">
            <PostHeader username={username} date={date} />
            <PostDescription text={text}/>
            <PostLikesComments 
                likes={likes} 
                comments={comments}
                isCommentsVisible={isCommentsVisible}
                toggleComments={() => setCommentsVisible(prev => !prev)} 
            />
        </div>
    );
}

export default Post;