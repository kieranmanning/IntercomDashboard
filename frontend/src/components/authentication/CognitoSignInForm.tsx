import React from 'react';

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
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    placeholder="User name" 
                    id="username"
                    required
                />
                <input
                    type="password" 
                    placeholder="Password" 
                    id="password"
                    required
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};
