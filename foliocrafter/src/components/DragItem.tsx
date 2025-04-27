import React, { useCallback } from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardContent, Typography } from '@mui/material';

export type ProjectSummary = {
  title: string;
  description: string;
};

interface DragItemProps {
  project: ProjectSummary;
}

const DragItem: React.FC<DragItemProps> = ({ project }) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: 'PROJECT',
      item: project,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [project]
  );

  // THIS is the proper callback ref (no 'contentReference' needed!)
  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) dragRef(node);
    },
    [dragRef]
  );

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        marginBottom: 8,
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="subtitle1">{project.title}</Typography>
          <Typography variant="body2">{project.description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DragItem;
