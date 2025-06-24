import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { PostProps } from '../post/Post';
import Post from '../post/Post';

const ChosenPost: React.FC = () => {
    const location = useLocation();
    const post: PostProps = location.state;

    if (!post) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <Post 
                key={post.id}
                id={post.id}
                username={post.username}
                text={post.text}
                date={post.date}
                likes={post.likes}
                comments={post.comments}
            />
        </>
    );
}

export default ChosenPost;
