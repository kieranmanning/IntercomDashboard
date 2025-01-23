import { useEffect, useState } from 'react';

export default function GitHubCallback() {
    const [ authd, setAuthd ] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            // Send code to backend
            fetch('http://localhost:8080/api/auth/github/callback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code }),
            })
            .then(response => response.json())
            .then(data => {
                setAuthd(true);
                console.log(data);
            });
        }
    }, []); // todo

    if (! authd) {
        return <div>Processing GitHub login...</div>;    
    } else {
        return <div> authenticated </div>;
    }
}