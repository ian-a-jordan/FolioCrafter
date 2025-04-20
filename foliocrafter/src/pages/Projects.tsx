import { useState } from 'react';
import { Box, Typography, List, ListItem, Checkbox, Button, Card, CardContent } from '@mui/material';

// Define a type for the project summary
type ProjectSummary = {
    title: string;
    description: string;
};

interface ProjectListProps {
    summaries: ProjectSummary[];
}

const ProjectList = ({ summaries }: ProjectListProps) => {
    const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

    const handleSelectProject = (project: string) => {
        setSelectedProjects((prev) => 
            prev.includes(project)
                ? prev.filter((p) => p !== project)
                : [...prev, project]
        );
    };

    const handleGenerateResume = () => {
        // Call GPT API to generate resume from selected projects
        console.log('Generating resume for projects:', selectedProjects);
    };

    return (
        <Box sx={{ maxWidth: 700, mx: 'auto', mt: 5, p: 2 }}>
            <Typography variant="h5" gutterBottom>
                Your Projects
            </Typography>
            <Typography variant="body2" gutterBottom>
                Select up to 3 projects to generate your resume.
            </Typography>
            <List>
                {summaries.map((project, index) => (
                    <ListItem key={index} sx={{ mb: 2 }}>
                        <Card sx={{ width: '100%', backgroundColor: '#f5f5f5' }}>
                            <CardContent>
                                <Typography variant="h6">{project.title}</Typography>
                                <Typography variant="body2">{project.description}</Typography>
                                <Checkbox
                                    checked={selectedProjects.includes(project.title)}
                                    onChange={() => handleSelectProject(project.title)}
                                />
                                Select this project
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGenerateResume}
                disabled={selectedProjects.length === 0 || selectedProjects.length > 3}
            >
                Generate Resume
            </Button>
        </Box>
    );
};

export default ProjectList;
