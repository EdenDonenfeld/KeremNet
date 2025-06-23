import React from 'react';

const Post: React.FC = () => {
    return (
        <div className="post-container">
            <div className="post-header">
                <div className="header-info">
                    <div className="user-info">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1rem" width="1rem" className="user-icon">
                            <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"/>
                        </svg>                        
                        <span className="username">eden</span>
                    </div>
                    <div className="post-time">
                        <span className="time">2 hours ago</span>
                    </div>
                </div>
            </div>

            <div className="post-content">
                <div className="post-image">
                    <img src="dogs.jpg" alt="Post content" />
                </div>
            </div>

            <div className="post-footer">
                <div className="likes">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1rem" width="1rem" className="likes-icon">
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                    </svg>
                    <span className="like-count">100 likes</span>
                </div>

                <div className="comments">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1rem" width="1rem" className="comments-icon">
                            <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
                    </svg>
                    <span className="comment-count">50 comments</span>
                </div>
            </div>

            <div className="post-description">
                <p className="description-text">This is a sample post description. It can be a short text about the image or any other content.</p>
            </div>

        </div>
    );
}

export default Post;