import React from 'react';
import { Box, Typography, Divider, Card, CardContent, Chip, Stack, Button } from '@mui/material';
import RippleWrapper from '../components/buttons/RippleWrapper';

const ResumePreview: React.FC = () => {

    return (
        <Box
            sx={{
                maxWidth: '800px',
                margin: '100px auto', // center and push down
                padding: 4,
                backgroundColor: 'background.paper',
                borderRadius: 3,
                boxShadow: 3,
            }}
        >
            {/* Full Name and Contact */}
            <Typography variant="h3" textAlign="center" fontWeight="bold">
                John Doe
            </Typography>

            <Typography variant="subtitle1" textAlign="center" color="text.secondary" gutterBottom>
                johndoe@example.com | (123) 456-7890 | linkedin.com/in/johndoe | github.com/johndoe
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Summary */}
            <Box mb={4}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Summary
                </Typography>
                <Typography variant="body1">
                    Highly motivated Full Stack Developer with a passion for building scalable web applications
                    and working across the full stack. Experienced in React, Node.js, and cloud technologies.
                </Typography>
            </Box>

            {/* Projects */}
            <Box mb={4}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Projects
                </Typography>

                <Card variant="outlined" sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold">
                            Portfolio Website
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            A personal portfolio site showcasing projects, built with React and hosted on Netlify.
                        </Typography>
                        <Stack direction="row" spacing={1} mt={1}>
                            <Chip label="React" size="small" />
                            <Chip label="Netlify" size="small" />
                            <Chip label="Material UI" size="small" />
                        </Stack>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold">
                            E-commerce API
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            RESTful API built with Node.js, Express, and MongoDB to support a mock e-commerce platform.
                        </Typography>
                        <Stack direction="row" spacing={1} mt={1}>
                            <Chip label="Node.js" size="small" />
                            <Chip label="Express" size="small" />
                            <Chip label="MongoDB" size="small" />
                        </Stack>
                    </CardContent>
                </Card>
            </Box>

            {/* Education */}
            <Box mb={4}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Education
                </Typography>
                <Typography variant="body1">
                    B.S. in Computer Science — XYZ University, 2018
                </Typography>
            </Box>

            {/* Certifications */}
            <Box mb={4}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Certifications
                </Typography>
                <Typography variant="body1">
                    AWS Certified Solutions Architect – Associate
                </Typography>
            </Box>

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
                        sx={{
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

export default ResumePreview;
