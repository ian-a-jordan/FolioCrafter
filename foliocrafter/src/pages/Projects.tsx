import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import DropZone from '../components/DropZone';
import DragItem, { ProjectSummary } from '../components/DragItem';
import RippleWrapper from '../components/buttons/RippleWrapper';
import { useColorScheme } from '@mui/material/styles';

interface ProjectsProps {
  summaries: ProjectSummary[];
}

const Projects: React.FC<ProjectsProps> = ({ summaries }) => {
  const [availableProjects, setAvailableProjects] = useState<ProjectSummary[]>(summaries);
  const [selectedProjects, setSelectedProjects] = useState<ProjectSummary[]>([]);

  const { mode } = useColorScheme();
  const textColor = mode === 'dark' ? '#000000' : '#FFF';

  const handleSelect = (item: ProjectSummary) => {
    // Prevent duplicates
    if (selectedProjects.find(p => p.title === item.title)) return;

    setAvailableProjects(prev => prev.filter(p => p.title !== item.title));
    setSelectedProjects(prev => [...prev, item]);
  };

  const handleReturn = (item: ProjectSummary) => {
    // Prevent duplicates
    if (availableProjects.find(p => p.title === item.title)) return;

    setSelectedProjects(prev => prev.filter(p => p.title !== item.title));
    setAvailableProjects(prev => [...prev, item]);
  };

  const handleGenerateResume = () => {
    console.log('Generating resume for:', selectedProjects);
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 15, p: 2 }}>
      <Grid container spacing={2} >
        <Grid size={{ xs: 12, sm: 6 }}>
          <DropZone title="Available Projects" onDrop={handleReturn}>
            {availableProjects.map((project) => (
              <DragItem key={project.title} project={project} />
            ))}
          </DropZone>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <DropZone title="Selected Projects (max 3)" onDrop={handleSelect}>
            {selectedProjects.map((project) => (
              <DragItem key={project.title} project={project} />
            ))}
          </DropZone>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4, // margin top if you want some spacing
        }}
      >
        <RippleWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateResume}
            disabled={selectedProjects.length === 0}
            sx={{
              color: `${textColor} !important`, // ensure the text is visible
              justifyContent: 'center',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              borderRadius: 2,
              boxShadow: 3,
              textTransform: 'none',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
            }}
          >
            Export
          </Button>
        </RippleWrapper>
      </Box>
    </Box>
  );
};

export default Projects;
