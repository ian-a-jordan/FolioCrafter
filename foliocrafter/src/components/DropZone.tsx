import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { Box, Typography } from '@mui/material';
import { ProjectSummary } from './DragItem';

interface DropZoneProps {
    title: string;
    onDrop: (item: ProjectSummary) => void;
    children: React.ReactNode;
}

const DropZone: React.FC<DropZoneProps> = ({ title, onDrop, children }) => {
    const [{ isOver, canDrop }, dropRef] = useDrop(
        () => ({
            accept: 'PROJECT',
            drop: (item: ProjectSummary) => {
                onDrop(item);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [onDrop]
    );

    // --- THIS PART is the important fix:
    const ref = useCallback(
        (node: HTMLDivElement | null) => {
            if (node) dropRef(node);
        },
        [dropRef]
    );

    return (
        <Box
            ref={ref}
            sx={{
                minHeight: 300,
                height: '100%', // Ensure the DropZone takes up all available height
                p: 1,
                border: '2px dashed #ccc',
                boxSizing: 'border-box', // Include border and padding in the height/width calculation
                backgroundColor: isOver && canDrop ? '#e0f7fa' : 'transparent',
                transition: 'background-color 0.2s ease',
            }}
        >
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            {children}
        </Box>
    );
};

export default DropZone;
