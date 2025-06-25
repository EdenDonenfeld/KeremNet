import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { usePostById } from '../../../hooks/usePostById';
import Post from '../../post/Post';

const ChosenPost: React.FC = () => {
    const { id } = useParams();
    const { isLoading, error, data } = usePostById(id);

    if (isLoading) {
        return <p>Loading post...</p>;
    }

    if (error || !data) {
        return <Navigate to="/" />;
    }

    return (
        <Post {...data} />
    );
}

export default ChosenPost;