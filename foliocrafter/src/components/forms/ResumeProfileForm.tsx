import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { inputLabelClasses } from '@mui/material/InputLabel';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';
import RippleWrapper from '../buttons/RippleWrapper';

const Card = styled(MuiCard)(({ theme }) => ({
    zIndex: '500',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow:
        'hsla(0, 0.00%, 0.00%, 0.21) 0px 5px 15px 0px, hsla(0, 100.00%, 50.00%, 0.05) 0px 15px 35px -5px',

    ...theme.applyStyles('dark', {
        backgroundColor: '#252525',
        boxShadow:
            'hsla(0, 0.00%, 100.00%, 0.50) 0px 5px 15px 0px, hsla(0, 3.10%, 44.50%, 0.08) 0px 15px 35px -5px',
    }),
}));

const ResumeProfileForm: React.FC = () => {
    const { mode } = useColorScheme();
    const labelColor = mode === 'dark' ? '#90EE90' : 'blue';

    const commonLabelSx = {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        transform: 'unset',
        pl: 2,
        fontSize: '1.3rem',
        [`&.${inputLabelClasses.shrink}`]: {
            transform: 'translate(1px, -75%) scale(0.75)',
            color: labelColor,
        },
    };

    const sharedFieldSx = {
        '& .MuiOutlinedInput-notchedOutline legend': {
            maxWidth: '0 !important',
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
            outline: `3px solid ${labelColor}`,
        },
    };

    return (
        <Card elevation={3} sx={{ p: 4, borderRadius: 3, mt: 15, ml: 65, mr: 65 }}>
            <Typography variant="h4" gutterBottom>
                Resume Profile
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                Enter the basic information you'd like to include in every resume. All fields are optional - you can manually input these fields later if you'd like.
            </Typography>

            <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            required
                            fullWidth
                            label="Full Name"
                            variant="outlined"
                            slotProps={{ inputLabel: { sx: commonLabelSx } }}
                            sx={sharedFieldSx}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            variant="outlined"
                            slotProps={{ inputLabel: { sx: commonLabelSx } }}
                            sx={sharedFieldSx}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            required
                            fullWidth
                            label="Email Address"
                            variant="outlined"
                            slotProps={{ inputLabel: { sx: commonLabelSx } }}
                            sx={sharedFieldSx}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="LinkedIn URL"
                            variant="outlined"
                            slotProps={{ inputLabel: { sx: commonLabelSx } }}
                            sx={sharedFieldSx}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="GitHub URL"
                            variant="outlined"
                            slotProps={{ inputLabel: { sx: commonLabelSx } }}
                            sx={sharedFieldSx}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Portfolio Website"
                            variant="outlined"
                            slotProps={{ inputLabel: { sx: commonLabelSx } }}
                            sx={sharedFieldSx}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Address"
                            variant="outlined"
                            slotProps={{ inputLabel: { sx: commonLabelSx } }}
                            sx={sharedFieldSx}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Education"
                            variant="outlined"
                            multiline
                            placeholder="e.g., B.S. in Computer Science, XYZ University, 2018"
                            slotProps={{ inputLabel: { sx: commonLabelSx } }}
                            sx={sharedFieldSx}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Certifications"
                            variant="outlined"
                            multiline
                            placeholder="e.g., AWS Certified Solutions Architect"
                            slotProps={{ inputLabel: { sx: commonLabelSx } }}
                            sx={sharedFieldSx}
                        />
                    </Grid>
                </Grid>
                <Box
                    mt={4}
                    display="flex"
                    justifyContent="center"
                    gap={2}
                >
                    <RippleWrapper>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
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
                            Submit
                        </Button>
                    </RippleWrapper>

                    <RippleWrapper>
                        <Button
                            variant="outlined"
                            color="secondary"
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontWeight: 'bold',
                                borderRadius: 2,
                                textTransform: 'none',
                                transition: 'transform 0.2s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    backgroundColor: 'rgba(0,0,0,0.04)',
                                },
                            }}
                        >
                            Reset
                        </Button>
                    </RippleWrapper>

                </Box>

            </Box>

        </Card>
    );
};

export default ResumeProfileForm;
