import express from 'express';
import config from '../config.js';

const router = express.Router();

router.get('/github/callback', async (req, res) => {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            client_id: config.github.oauth.client_id,
            client_secret: config.github.oauth.client_secret,
            code: req.query.code
        })    
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (accessToken) {
        // If we get a token back from GitHub we can presume we've authenticated
        // successfully and set a basic session cookie for the frontend
        const userReponse = await fetch("https://api.github.com/user", { 
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken,
            }
        })
        
        const userData = await userReponse.json();
        req.session.user_email = userData["email"];
        req.session.signed_in = true
        console.log("successful login for " + req.session.user_email);
        res.redirect("/");
    }
});

export default router;