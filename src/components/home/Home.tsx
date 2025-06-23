import React, { useState } from 'react';
import './Home.css';
import Post, { PostProps } from '../post/Post';

interface Props {
    postsFromJson: PostProps[];
}

const Home: React.FC<Props> = ({ postsFromJson }) => {
    const [posts, setPosts] = useState<PostProps[]>(postsFromJson);
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