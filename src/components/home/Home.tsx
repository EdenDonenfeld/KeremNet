import React, { useEffect, useState } from 'react';
import Post, { PostProps } from '../post/Post';
import { usePosts } from '../../hooks/usePosts';
import './Home.css';

const Home: React.FC = () => {
    const { isLoading, error, data } = usePosts();
    const [posts, setPosts] = useState<PostProps[]>(data || []);
    const [loading, setLoading] = useState<boolean>(isLoading);
    const [errorText, setErrorText] = useState<string>('');

    useEffect(() => {
        if (data) {
            setPosts(data);
            setLoading(false);
        }
        if (error) {
            setErrorText('Failed to load posts from server.');
            setLoading(false);
        }
    }, [data, error]);

    return (
        <div className="home-container">
            {loading && <p>Loading posts...</p>}
            {error && <p className="error-message">{errorText}</p>}
            {!loading && !errorText && (
                <div className="posts-container">
                    {posts.map((post, _) => (
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
