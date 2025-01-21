import express from 'express';

const router = express.Router();

export default router.post('/github/callback', async (req, res) => {
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
            client_secret: "883700d68f0c611ce28940ce435035c474e991c4",
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