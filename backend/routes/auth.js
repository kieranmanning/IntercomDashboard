import express from 'express';

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
            client_id: "Ov23liTwXwG84d4q3SvW",
            client_secret: "<add key here>",
            code: req.query.code
        })    
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (accessToken) {
        // Use this access token to fetch user details or other tasks.
        // Maybe generate a JWT and send it to the frontend for session management.

        await fetch("https://api.github.com/user", { 
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken,
            }
        }).then((response) => {
            const response_json = response.json();
            req.session.user_email = response_json["email"];
            req.session.signed_in = true
            console.log("successful login for " + req.session.user_email);
            res.redirect("/");
        });
    } else {
        res.send("Authentication with GitHub failed");
    }
});

export default router;