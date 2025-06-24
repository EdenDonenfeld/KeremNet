import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment as solidComment } from '@fortawesome/free-solid-svg-icons';
import { faComment as regularComment } from '@fortawesome/free-regular-svg-icons';
import Comment, { CommentProps } from './comment/Comment';
import './PostLikesComments.css';

interface Props {
    username: string;
    likes: number;
    comments: CommentProps[];
}

const PostLikesComments: React.FC<Props> = ({ username, likes, comments }) => {
    const [likesCount, setLikesCount] = useState<number>(likes);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [commentsList, setCommentsList] = useState<CommentProps[]>(comments);
    const [commentText, setCommentText] = useState<string>('');
    const [isCommentsVisible, setIsCommentsVisible] = useState<boolean>(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
        if (!isLiked) {
            setLikesCount(likesCount + 1);
        } else {
            setLikesCount(likesCount - 1);
        }
    };

    const addComment = (text: string, username: string) => {
        if (text.trim() === '') {
            return;
        }
        const newComment: CommentProps = { text, username };
        setCommentsList([...commentsList, newComment]);
        setCommentText('');
        setIsCommentsVisible(true);
    };

    return (
        <div className="post-likes-comments-container">
            <div className="post-likes-comments">
                <div className="likes">
                    <FontAwesomeIcon 
                        icon={isLiked ? solidHeart : regularHeart} 
                        className="likes-icon"
                        onClick={toggleLike}
                    />
                    <span className="like-count">{likesCount} likes</span>
                </div>

                <div className="comments">
                    <FontAwesomeIcon 
                        icon={isCommentsVisible ? solidComment : regularComment} 
                        className="comments-icon" 
                        onClick={() => setIsCommentsVisible(!isCommentsVisible)}
                    />
                    <span className="comment-count">{commentsList.length} comments</span>
                </div>
            </div>
            <div className="comments-list-container">
                { isCommentsVisible && (
                    <ul className="comments-list">
                    {commentsList.map((comment, index) => (
                        <li key={index}>
                            <Comment text={comment.text} username={comment.username} />
                        </li>
                    ))}
                </ul>
                )}
                <div className="add-comment">
                    <input 
                        type="text" 
                        placeholder="Add a comment..." 
                        name="comment"
                        className="comment-input"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button className="comment-button" onClick={() => addComment(commentText, username)}>
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostLikesComments;
