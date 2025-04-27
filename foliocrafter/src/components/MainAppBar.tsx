import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import ColorModeSelect from '../theme/ColorModeSelect'; // make sure path is right
import RippleWrapper from './buttons/RippleWrapper';

interface MainAppBarProps {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
    isDark: boolean;
}

const MainAppBar: React.FC<MainAppBarProps> = ({
    selectedTab,
    setSelectedTab,
    isDark,
}) => {
    const [settingsOpen, setSettingsOpen] = useState(false);

    const handleSettingsOpen = () => setSettingsOpen(true);
    const handleSettingsClose = () => setSettingsOpen(false);

    return (
        <>
            <AppBar>
                <Toolbar sx={{ position: 'relative', minHeight: 72 }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        FolioCrafter
                    </Typography>

                    <Box
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: 3,
                        }}
                    >
                        <RippleWrapper>
                            <Button
                                startIcon={<AccountCircleIcon />}
                                onClick={() => setSelectedTab('Resume Profile')}
                                sx={{
                                    fontSize: '1.1rem',
                                    py: 1.5,
                                    px: 3,
                                    backgroundColor: selectedTab === 'Resume Profile' ? 'white' : 'transparent',
                                    '& .MuiSvgIcon-root': {
                                        color: selectedTab === 'Resume Profile' ? (isDark ? 'black' : 'black') : 'white',
                                    },
                                    '&:hover': {
                                        backgroundColor: selectedTab === 'Resume Profile' ? '#f0f0f0' : 'rgba(255,255,255,0.1)',
                                    },
                                    '&.MuiButton-root': {
                                        color: selectedTab === 'Resume Profile' ? (isDark ? 'black' : 'black') : 'white !important',
                                    },
                                }}
                            >
                                Resume Profile
                            </Button>
                        </RippleWrapper>

                        <RippleWrapper>
                            <Button
                                startIcon={<DashboardIcon />}
                                onClick={() => setSelectedTab('Create Summary')}
                                sx={{
                                    fontSize: '1.1rem',
                                    py: 1.5,
                                    px: 3,
                                    backgroundColor: selectedTab === 'Create Summary' ? 'white' : 'transparent',
                                    '& .MuiSvgIcon-root': {
                                        color: selectedTab === 'Create Summary' ? (isDark ? 'black' : 'black') : 'white',
                                    },
                                    '&:hover': {
                                        backgroundColor: selectedTab === 'Create Summary' ? '#f0f0f0' : 'rgba(255,255,255,0.1)',
                                    },
                                    '&.MuiButton-root': {
                                        color: selectedTab === 'Create Summary' ? (isDark ? 'black' : 'black') : 'white !important',
                                    },
                                }}
                            >
                                Create Summary
                            </Button>
                        </RippleWrapper>
                        
                        <RippleWrapper>
                            <Button
                                startIcon={<BuildIcon />}
                                onClick={() => setSelectedTab('Projects')}
                                sx={{
                                    fontSize: '1.1rem',
                                    py: 1.5,
                                    px: 3,
                                    backgroundColor: selectedTab === 'Projects' ? 'white' : 'transparent',
                                    '& .MuiSvgIcon-root': {
                                        color: selectedTab === 'Projects' ? (isDark ? 'black' : 'black') : 'white',
                                    },
                                    '&:hover': {
                                        backgroundColor: selectedTab === 'Projects' ? '#f0f0f0' : 'rgba(255,255,255,0.1)',
                                    },
                                    '&.MuiButton-root': {
                                        color: selectedTab === 'Projects' ? (isDark ? 'black' : 'black') : 'white !important',
                                    },
                                }}
                            >
                                Projects
                            </Button>
                        </RippleWrapper>

                        <RippleWrapper>
                            <Button
                                startIcon={<AccountCircleIcon />}
                                onClick={() => setSelectedTab('Resume Preview')}
                                sx={{
                                    fontSize: '1.1rem',
                                    py: 1.5,
                                    px: 3,
                                    backgroundColor: selectedTab === 'Resume Preview' ? 'white' : 'transparent',
                                    '& .MuiSvgIcon-root': {
                                        color: selectedTab === 'Resume Preview' ? (isDark ? 'black' : 'black') : 'white',
                                    },
                                    '&:hover': {
                                        backgroundColor: selectedTab === 'Resume Preview' ? '#f0f0f0' : 'rgba(255,255,255,0.1)',
                                    },
                                    '&.MuiButton-root': {
                                        color: selectedTab === 'Resume Preview' ? (isDark ? 'black' : 'black') : 'white !important',
                                    },
                                }}
                            >
                                Preview
                            </Button>
                        </RippleWrapper>

                    </Box>

                    <IconButton
                        onClick={handleSettingsOpen}
                        sx={{
                            backgroundColor: 'white !important',
                            color: 'black !important',
                            '& svg': {
                                color: 'black !important',
                            },
                            '&:hover': {
                                backgroundColor: '#98A869 !important',
                            },
                            border: 'none !important',
                        }}
                    >
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Settings Dialog */}
            <Dialog open={settingsOpen} onClose={handleSettingsClose} maxWidth="xs" fullWidth>
                <DialogTitle>
                    Settings
                    <IconButton
                        aria-label="close"
                        onClick={handleSettingsClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            backgroundColor: 'white !important',
                            color: 'black !important',
                            '& svg': {
                                color: 'black !important',
                            },
                            '&:hover': {
                                backgroundColor: '#98A869 !important',
                            },
                            border: 'none !important',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant="body1" gutterBottom>
                        Theme Mode
                    </Typography>
                    <ColorModeSelect />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default MainAppBar;
