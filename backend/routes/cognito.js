
import express from 'express';
import {
    AuthFlowType,
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import config from '../config.js';

const router = express.Router();

export const cognitoClient = new CognitoIdentityProviderClient({
    region: config.region,
  });

router.post('/signin', async(req,res) => {
    const { username, password } = req.body;
    console.log(username, password);

    const params = {
        AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
        },
        ClientId: config.cognito.oauth.client_id,
    };

    const command = new InitiateAuthCommand(params);
    const response = await cognitoClient.send(command);
    res.json(response);
});

router.get('/cognito/callback', async (req, res) => {
    console.log("cognito callback");

    const oidcConfig = await oidcClient.discovery(
        'https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_xaqjPOYjC',
        config.cognito.oauth.client_id,
        config.cognito.oauth.client_secret
    )

    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;        
    const tokens = await oidcClient.authorizationCodeGrant({
        oidcConfig,
        fullUrl
    })

    console.log(tokens);

    res.redirect('/');
});

export default router;

// import { useAuth } from "react-oidc-context";

// export default function GitHubLoginButton() {
//     const cognitoAuthConfig = {
//         authority: "https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_xaqjPOYjC",
//         client_id: "617i5dao3qnsogm5fd0dl4nbqt",
//         redirect_uri: "http://localhost:8080/api/auth/cognito/callback",
//         response_type: "code",
//         scope: "email openid profile",
//     };

    

//     const loginWithGithub = () => {
//         const clientID="Ov23liTwXwG84d4q3SvW";
//         const redirectURI="http://localhost:8080/api/auth/github/callback";
//         window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}`;
//     };

//     return (
//         <button onClick={loginWithGithub}> Login with GitHub </button>
//     )
// }

