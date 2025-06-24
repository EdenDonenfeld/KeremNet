import React from 'react';
import PostHeader from './PostHeader';
import PostLikesComments from './PostLikesComments';
import PostDescription from './PostDescription';
import { CommentProps } from './comment/Comment';
import { useNavigate } from 'react-router-dom';
import './Post.css'; 

interface Props {
    id: string;
    username: string;
    text: string;
    date: string;
    likes: number;
    comments: CommentProps[];
}

const Post: React.FC<Props> = ({ id, username, text, date, likes, comments }) => {
    const navigate = useNavigate();

    const handlePostClick = () => {
        navigate('/chosen-post', {
            state: { id, username, text, date, likes, comments }
        });
    };

    return (
        <div className="post-container" onClick={() => handlePostClick()}>
            <PostHeader username={username} date={date} />
            <PostDescription text={text}/>
            <PostLikesComments 
                username={username}
                likes={likes} 
                comments={comments}
            />
        </div>
    );
}

export default Post;
export type { Props as PostProps };