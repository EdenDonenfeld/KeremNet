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
        <p className="error-message">Failed to load posts from server.</p>
    }

    if (!data) {
        return <p className="no-posts-message">No posts available.</p>;
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
