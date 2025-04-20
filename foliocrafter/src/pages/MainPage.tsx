import { useState } from 'react';
import {
    Box,
} from '@mui/material';
import CreateSummary from './CreateSummary';
import AppTheme from '../theme/AppTheme';
import { useColorScheme } from '@mui/material/styles';
import Projects from './Projects';
import MainAppBar from '../components/MainAppBar';
import ResumeProfileForm from '../components/forms/ResumeProfileForm';

const MainPage = () => {
    const [selectedTab, setSelectedTab] = useState('Create Summary');

    const { mode } = useColorScheme();
    const isDark = mode === 'dark';

    const summaries = [
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' },
        { title: 'Project 3', description: 'Description of project 3' },
    ];

    const renderContent = () => {
        switch (selectedTab) {
            case 'Create Summary':
                return <CreateSummary />;
            case 'Projects':
                return <Projects summaries={summaries} />;
            case 'Resume Profile':
                return <ResumeProfileForm />;
            default:
                return null;
        }
    };

    return (
        <AppTheme>
            <Box sx={{ flexGrow: 1 }}>
                <MainAppBar
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    isDark={isDark}
                />
                <Box sx={{ p: 3 }}>
                    {renderContent()}
                </Box>
            </Box>
        </AppTheme>
    );
};

export default MainPage;
