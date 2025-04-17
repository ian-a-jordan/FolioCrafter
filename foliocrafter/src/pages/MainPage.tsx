import { Card, CardContent, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4rem' }}>
      <Card sx={{ backgroundColor: '#2196f3', color: 'white', padding: 2, minWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to the Main Page!
          </Typography>
          <Typography variant="body2">
            You successfully redirected 🎉
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MainPage;
