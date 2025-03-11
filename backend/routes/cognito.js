
import express from 'express';
import {
    AuthFlowType,
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { jwtDecode } from "jwt-decode";
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
    const id_token = jwtDecode(response.AuthenticationResult.IdToken);
    req.session.email = id_token.email
    req.session.signed_in = true
    req.session.id_token = response.AuthenticationResult.IdToken
    req.session.access_token = response.AuthenticationResult.AccessToken
    req.session.refresh_token = response.AuthenticationResult.RefreshToken
    console.log(req.session.id_token);
    console.log(req.session.email + " has signed in");
    res.redirect('/');
});

export default router;