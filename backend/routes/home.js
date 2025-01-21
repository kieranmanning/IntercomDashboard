import express from 'express'
import path from 'path';

const router = express.Router()

export default router.get('*', function(req, res) {
    res.sendFile('index.html', {
        root: path.join(import.meta.dirname, '../../frontend/dist')
    });
});