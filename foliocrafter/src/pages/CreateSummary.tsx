// CreateSummary.tsx

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { useColorScheme } from '@mui/material/styles';
import RippleWrapper from '../components/buttons/RippleWrapper';

const CreateSummary: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState('');

  const { mode } = useColorScheme();
  const labelColor = mode === 'dark' ? '#90EE90' : 'blue';
  const textColor = mode === 'dark' ? '#000000' : '#FFF';

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

  const handleAnalyze = () => {
    if (!repoUrl) return;
    setIsLoading(true);

    setTimeout(() => {
      setSummary(`✅ Summary generated for: ${repoUrl}

🧠 This project appears to be a fullstack React + Node.js app designed for managing portfolios.
📄 The README includes installation instructions, usage examples, and contribution guidelines.
⚙️ Tech stack: React, Express, MongoDB, and TailwindCSS.
📈 Potential resume bullet point:
"Developed a responsive fullstack portfolio management app using the MERN stack, implementing authentication, CRUD operations, and RESTful APIs."

✨ Tip: You can refine this summary or add more repos to generate variations!
`);
      setIsLoading(false);
    }, 2000); // Mock async call
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 5, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Generate Your Project Summary
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Paste the URL to a public GitHub repository and we’ll analyze the README file for you.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          label="GitHub Repository URL"
          variant="outlined"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          slotProps={{ inputLabel: { sx: commonLabelSx } }}
          sx={sharedFieldSx}
        />

      <RippleWrapper>
        <Button
          variant="contained"
          onClick={handleAnalyze}
          disabled={!repoUrl || isLoading}
          sx={{
            width: '100%',
            px: 4,
            py: 1.5,
            fontWeight: 'bold',
            borderRadius: 2,
            boxShadow: 3,
            textTransform: 'none',
            transition: 'transform 0.2s ease',
            color: `${textColor} !important`, // ensure the text is visible
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
          }}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Analyze'}
        </Button>
      </RippleWrapper>
      </Box>

      {summary && (
        <Card sx={{ backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Analysis Result
            </Typography>
            <Typography component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
              {summary}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default CreateSummary;
