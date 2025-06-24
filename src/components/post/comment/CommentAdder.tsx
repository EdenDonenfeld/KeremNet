import React, { useState } from 'react';
import './CommentAdder.css';

interface Props {
    username: string;
    addComment: (text: string, username: string) => void;
}

const CommentAdder: React.FC<Props> = ({ username, addComment }) => {
    const [commentText, setCommentText] = useState('');

    const handleCommentAddition = () => {
        if (commentText.trim() === '') {
            return;
        }
        addComment(commentText, username);
        setCommentText('');
    }

    return (
        <div className="add-comment">
            <input 
                type="text" 
                placeholder="Add a comment..." 
                name="comment"
                className="comment-input"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
            />
            <button className="comment-button" onClick={() => handleCommentAddition()}>
                Post
            </button>
        </div>
    );
}

export default CommentAdder;