import React, { useEffect, useState } from 'react';
import './Home.css';
import Post, { PostProps } from '../post/Post';

interface Props {
    postsFromJson: PostProps[];
}

const Home: React.FC<Props> = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);

    const fetchAllPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data.posts);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        }
    }

    useEffect(() => {
        try {
            fetchAllPosts();
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }, []);

    return (
        <div className="home-container">
            <h1 className="title">KeremNet</h1>
            <div className="posts-container">
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        username={post.username}
                        text={post.text}
                        likes={post.likes}
                        comments={post.comments}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;