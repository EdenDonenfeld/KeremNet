import React, { useEffect, useState } from 'react';
import Post, { PostProps } from '../post/Post';
import { fetchPosts } from '../../services/FetchPosts'
import './Home.css';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        try {
            const loadPosts = async () => {
                const fetchedPosts = await fetchPosts();
                setPosts(fetchedPosts);
            };
            loadPosts();
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }, []);

    return (
        <div className="home-container">
            <h1 className="title">KeremNet</h1>
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
        </div>
    );
}

export default Home;