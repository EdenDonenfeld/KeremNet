import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PostProps } from '../post/Post';
import Post from '../post/Post';

const ChosenPost: React.FC = () => {
    const { encodedPost } = useParams();
    const [post, setPost] = useState<PostProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (encodedPost) {
            try {
                const decodedPost = decodeURIComponent(encodedPost);
                const post: PostProps = JSON.parse(decodedPost);
                console.log('Decoded post:', post);
                setPost(post);
            } catch (error) {
                console.error('Error decoding post:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    }, [encodedPost]);

    if (isLoading) {
        return <p>Loading post...</p>;
    }

    return (
        <>
            { 
                !post ? (
                    <Navigate to="/" /> 
                ) : (
                    <Post 
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        text={post.text}
                        date={post.date}
                        likes={post.likes}
                        comments={post.comments}
                    />
                )
            }
        </>
    );
}

export default ChosenPost;
