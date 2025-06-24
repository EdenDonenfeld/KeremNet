import React from 'react';
import './CommentAdder.css';

interface Props {
    commentText: string;
    username: string;
    setCommentText: (text: string) => void;
    addComment: (text: string, username: string) => void;
}

const CommentAdder: React.FC<Props> = ({ commentText, username, setCommentText, addComment }) => {
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
            <button className="comment-button" onClick={() => addComment(commentText, username)}>
                Post
            </button>
        </div>
    );
}

export default CommentAdder;