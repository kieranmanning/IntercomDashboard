import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CognitoSignInForm() {

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
            <div>
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
            </div>
        </Box>
    );
};
