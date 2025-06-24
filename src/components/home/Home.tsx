import React from 'react';
import Post from '../post/Post';
import { usePosts } from '../../hooks/usePosts';
import './Home.css';

const Home: React.FC = () => {
    const { isLoading, error, data } = usePosts();

    return (
        <div className="home-container">
            <h1 className="title">KeremNet</h1>
            {isLoading && <p>Loading posts...</p>}
            {error && <p className="error-message">Failed to load posts from server.</p>}
            {!isLoading && !error && data && (
                <div className="posts-container">
                    {data.map((post, _) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            username={post.username}
                            text={post.text}
                            date={post.date}
                            likes={post.likes}
                            comments={post.comments}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
