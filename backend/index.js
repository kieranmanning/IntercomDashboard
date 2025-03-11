'use strict';

import path from 'path';
import express from 'express';
import session from 'express-session';

import github_oauth_route from './routes/github-oauth.js';
import cognito_route from './routes/cognito.js'
import home_route from './routes/home.js';
import session_route from './routes/session.js';
import notifications_routes from './routes/notifications.js';

const app = express();
app.use(express.json());
app.use(session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false
}));

// initialize our OpenID client for AWS Cognito


// Include our built static resources from React
app.use(express.static(path.join(import.meta.dirname, '../frontend/dist')));

// Include our routes
app.use('/api/auth/github', github_oauth_route);
app.use('/api/auth/cognito', cognito_route);
app.use('/api/session/', session_route);
app.use('/api/notifications/', notifications_routes);
app.use('/', home_route);

app.use((req, res) => {
    res.status(404).send('404');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});