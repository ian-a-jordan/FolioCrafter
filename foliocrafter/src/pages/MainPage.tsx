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
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ResumePreview from './Preview';

const MainPage = () => {
    const [selectedTab, setSelectedTab] = useState('Create Summary');

    const { mode } = useColorScheme();
    const isDark = mode === 'dark';

    const summaries = [
        { title: 'Project 1', description: 'Craiglists type marketplace' },
        { title: 'Project 2', description: 'Social Media App' },
        { title: 'Project 3', description: 'Platform to help college grads create a resume with their personal projects' },
    ];

    const renderContent = () => {
        switch (selectedTab) {
            case 'Create Summary':
                return <CreateSummary />;
            case 'Projects':
                return (
                    <DndProvider backend={HTML5Backend}>
                      <Projects summaries={summaries} />
                    </DndProvider>
                  );
            case 'Resume Profile':
                return <ResumeProfileForm />;
            case 'Resume Preview':
                return <ResumePreview />;
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
