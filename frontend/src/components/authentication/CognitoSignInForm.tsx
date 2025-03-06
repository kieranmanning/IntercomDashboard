import React from 'react';

export default function CognitoSignInForm() {

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        console.log(email);
        console.log(password);
    }
    
    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email" 
                    placeholder="Email" 
                    id="email"
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
