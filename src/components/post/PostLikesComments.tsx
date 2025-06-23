import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import Comment, { CommentProps } from './comment/Comment';
import './PostLikesComments.css';

interface Props {
    likes: number;
    comments: CommentProps[];
}

const PostLikesComments: React.FC<Props> = ({ likes, comments }) => {
    return (
        <div className="post-likes-comments-container">
            <div className="post-likes-comments">
                <div className="likes">
                    <FontAwesomeIcon icon={faHeart} className="likes-icon" />
                    <span className="like-count">{likes} likes</span>
                </div>

                <div className="comments">
                    <FontAwesomeIcon icon={faComment} className="comments-icon" />
                    <span className="comment-count">{comments.length} comments</span>
                </div>
            </div>
            <div className="comments-list-container">
                <ul className="comments-list">
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <Comment text={comment.text} username={comment.username} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PostLikesComments;
