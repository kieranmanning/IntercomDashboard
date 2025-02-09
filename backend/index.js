'use strict';

import path from 'path';
import express from 'express';
import session from 'express-session';

import auth_route from './routes/auth.js';
import home_route from './routes/home.js';
import session_route from './routes/session.js';

const app = express();
app.use(express.json());
app.use(session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false
}));

// Include our built static resources from React
app.use(express.static(path.join(import.meta.dirname, '../frontend/dist')));

// Include our routes
app.use('/api/auth/', auth_route);
app.use('/api/session/', session_route);
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