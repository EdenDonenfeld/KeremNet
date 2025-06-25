import React from 'react';
import PostHeader from './PostHeader';
import PostLikesComments from './PostLikesComments';
import PostDescription from './PostDescription';
import PostImage from './PostImage';
import { CommentProps } from './comment/Comment';
import { useNavigate } from 'react-router-dom';
import { useImageValidation } from '../../hooks/useImageValidation';
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
    const { imageExists } = useImageValidation(`/images/posts/${id}.png`);

    const handlePostClick = () => {
        navigate(`/posts/${id}`);
    };

    return (
        <div className="post-container" onClick={handlePostClick}>
            <PostHeader username={username} date={date} userId={id}/>
            {imageExists && <PostImage image={`/images/posts/${id}.png`} />}
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