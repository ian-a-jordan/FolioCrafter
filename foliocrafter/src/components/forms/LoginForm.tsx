import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import AppTheme from '../../theme/AppTheme';
import ColorModeSelect from '../../theme/ColorModeSelect';
import { GoogleIcon } from '../customIcons/CustomIcons';
import gearLogo from '../../assets/gear.json';
import Lottie from 'lottie-react';
import NeonFilter from '../../assets/NeonFilter';
import "../../styles/LoginForm.css"
import { useColorScheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const Card = styled(MuiCard)(({ theme }) => ({
  zIndex: '500',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  backgroundColor: theme.palette.background.paper, // Light mode default

  boxShadow:
    'hsla(130, 98.40%, 48.00%, 0.21) 0px 5px 15px 0px, hsla(0, 100.00%, 50.00%, 0.05) 0px 15px 35px -5px',

  ...theme.applyStyles('dark', {
    backgroundColor: '#252525', // or whatever solid color you want
    boxShadow:
      'hsla(325, 73.10%, 49.60%, 0.50) 0px 5px 15px 0px, hsla(0, 3.10%, 44.50%, 0.08) 0px 15px 35px -5px',
  }),
}));


const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const { mode } = useColorScheme();
  var titleColor;
  var textColor;

  if (mode === 'dark') {
    titleColor = '#d51818'; // Dark mode color
    textColor = '#FFF'
  } else if (mode === 'light') {
    titleColor = '#359341'; // Light mode color
    textColor = '#000000'
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // always prevent default to control the flow

    const isValid = validateInputs(); // returns true if both inputs are valid

    if (isValid) {
      navigate('/main');
    }
  };



  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <AppTheme {...props}>
      <NeonFilter />
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined"
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '45vw',
            height: 'auto',
            overflow: 'hidden',
          }}
        >
          <ColorModeSelect
            sx={{
              position: 'absolute',
              left: 16,
              right: 16,
              zIndex: 10,
              width: '100px',
              pointerEvents: 'auto',
            }}
          />
          <Box
            display="flex"
            flex={4}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="100%"  // Make sure it takes full height
            padding={2}  // Adjust padding for spacing
          >
            <Lottie animationData={gearLogo} style={{ width: 200, marginBottom: '1rem' }} />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2} // space between the text and the blurb
            >
              <Typography
                variant="h3"
                gutterBottom
                className="stranger-things eighties"
                sx={{
                  color: titleColor, // change these as you like
                  transition: 'color 0.3s ease-in-out',
                }}
              >
                Folio Crafter
              </Typography>
              <Typography variant="body1" maxWidth="300px">
                Link your public GitHub repo, and we’ll take it from there – making resumes easy!
              </Typography>
            </Box>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
              flex: 6
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
              Sign in
            </Typography>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{
                  '& .MuiInputBase-input': {
                    fontSize: '1rem',
                  },
                  '& .MuiFormHelperText-root': {
                    fontSize: '1rem',
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
                sx={{
                  '& .MuiInputBase-input': {
                    fontSize: '1rem',
                  },
                  '& .MuiFormHelperText-root': {
                    fontSize: '1rem',
                  },
                }}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button
              type="submit" // TODO possibly change the functionality here for better authentication
              fullWidth
              variant="contained"
            >
              Sign in
            </Button>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center' }}
              color={textColor}
            >
              Forgot your password?
            </Link>
            <Divider
              sx={{
                color: textColor
              }}>or</Divider>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => alert('Sign in with Google')}
                startIcon={<GoogleIcon />}
                sx={{
                  color: textColor
                }}
              >
                Sign in with Google
              </Button>
              <Typography sx={{ textAlign: 'center' }}>
                Don&apos;t have an account?{' '}
                <Link
                  href="/material-ui/getting-started/templates/sign-in/"
                  variant="body2"
                  sx={{ 
                    alignSelf: 'center',
                    color: textColor
                   }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}
