import React from 'react';
import { Box } from '@mui/material';
import './ApplicationLayout.css';

interface Props {
    children: React.ReactNode;
}

const ApplicationLayout: React.FC<Props> = ({ children }) => {
    return (
        <Box className="application-layout">
            <Box>
                {children}
            </Box>
        </Box>
    );
}

export default ApplicationLayout;