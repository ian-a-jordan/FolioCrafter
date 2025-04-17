import { Box } from '@mui/material';
import LoginForm from '../components/forms/LoginForm';
import AppTheme from '../theme/AppTheme';
import NetBackground from '../components/InteractiveNetBackground';

function HomePage () {
    return (
        <AppTheme> 
        <NetBackground/>    
        <Box display="flex" height="100vh">
          {/* Right Side */}
          <Box
            display="flex"
            flexDirection = "column"
            justifyContent="center"
            width="100vw"
            height="100%"  // Make sure it takes full height
            padding={2}  // Adjust padding for spacing
          >
            <LoginForm />
          </Box>
        </Box>
        </AppTheme>
      );

}

export default HomePage