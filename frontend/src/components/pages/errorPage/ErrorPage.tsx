import React from 'react';

const ErrorPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <a href="/" style={{ textDecoration: 'none', color: '#007bff' }}>
                Go back to Home
            </a>
        </div>
    );
}

export default ErrorPage;