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
            client_secret: "51c99a5195f197c15b4f5d8c9e3b8deec7b82035",
            code: req.query.code
        })    
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (accessToken) {
        // Use this access token to fetch user details or other tasks.
        // Maybe generate a JWT and send it to the frontend for session management.
        var session_token = "test-token";
        req.session.token = session_token;
        res.redirect("/");
    } else {
        res.send("Authorization failed");
    }
});

router.get('/getUserData', async function(req, res) {
    req.get("Authorization"); 
    await fetch("http://api.github.com/user", { 
        method: "GET",
        headers: {
            "Authorization": req.get("Authorization")
        }
    }).then((response) => {
        return response.json(); 
    }).then((data) => {
        console.log(data);
        res.json(data);
    });
})

export default router;