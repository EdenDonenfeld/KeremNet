import React, { useEffect, useState } from 'react';
import Post, { PostProps } from '../post/Post';
import { fetchPosts } from '../../services/FetchPosts';
import './Home.css';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorText, setErrorText] = useState<string>('');

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setErrorText('Could not fetch posts. Server may be down.');
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, []);

    return (
        <div className="home-container">
            {loading && <p>Loading posts...</p>}
            {errorText && <p className="error-message">{errorText}</p>}
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
