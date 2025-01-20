'use strict';

const express = require('express');
const path = require('path');
const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, '../frontend/dist')))

app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../frontend/dist')});
});

app.post('/api/auth/github/callback', async (req, res) => {
    const { code } = req.body;

    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            client_id: "Ov23liTwXwG84d4q3SvW",
            client_secret: redacted,
            code,
        }),
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (accessToken) {
        // Use this access token to fetch user details or other tasks.
        // Maybe generate a JWT and send it to the frontend for session management.
        res.json({ success: true});
    } else {
        res.json({ success: false });
    }
});

app.use((req, res) => {
    res.status(404).send('404');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});