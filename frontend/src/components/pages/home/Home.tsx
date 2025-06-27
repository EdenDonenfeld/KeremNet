import React from 'react';
import Post from '../../post/Post';
import { usePosts } from '../../../hooks/usePosts';
import './Home.css';

const Home: React.FC = () => {
    const { isLoading, error, data } = usePosts();

    if (isLoading) {
        return <p>Loading posts...</p>;
    }

    if (error) {
        const message = (error as Error).message || 'Error fetching posts';
        return <p className="error-message">{message}</p>;
    }

    if (!data || data.length === 0) {
        return <p className="no-posts-message">No posts available</p>;
    }

    return (
        <div className="home-container">
            <div className="posts-container">
                {data.map((post, _) => (
                    <Post
                        key={post.id}
                        {...post}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
