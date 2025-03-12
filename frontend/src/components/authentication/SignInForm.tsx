import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import GitHubLoginButton from './GitHubLoginButton';

const SignInCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '450px',
    },
    boxShadow:
      'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
      boxShadow:
        'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
  }));
  
const SignInStack = styled(Stack)(({ theme }) => ({
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

export default function SignInForm() {

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const target = event.target as typeof event.target & {
            username: { value: string };
            password: { value: string };
        };
        const username = target.username.value;
        const password = target.password.value;
        fetch('/api/auth/cognito/signin', {
            method: 'POST',
            body: JSON.stringify({
                username: username, 
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res)
        .then((data) => data);
    }
    
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <SignInStack>
                <SignInCard>
                <h2>Sign In</h2>
                    <TextField
                        placeholder="User name" 
                        id="username"
                        required
                    />
                    <TextField
                        type="password" 
                        placeholder="Password" 
                        id="password"
                        required
                    />
                    <Button type="submit">Sign In</Button>
                    <GitHubLoginButton />                    
                </SignInCard>
            </SignInStack>
        </Box>
    );
};
