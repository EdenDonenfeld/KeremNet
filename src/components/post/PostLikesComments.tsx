import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import './PostLikesComments.css';

interface Props {
    likes?: number;
    comments?: number;
}

const PostLikesComments: React.FC<Props> = ({ likes = 0, comments = 0}) => {
    return (
        <div className="post-likes-comments-container">
            <div className="likes">
                <FontAwesomeIcon icon={faHeart} className="likes-icon" />
                <span className="like-count">{likes} likes</span>
            </div> 

            <div className="comments">
                <FontAwesomeIcon icon={faComment} className="comments-icon" />
                <span className="comment-count">{comments} comments</span>
            </div>
        </div>
    );
}

export default PostLikesComments;