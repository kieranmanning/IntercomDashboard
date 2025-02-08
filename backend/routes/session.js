import express from 'express';

const router = express.Router();

export default router.get('', (req, res) => {
    if(req.session.signed_in) {
        res.send({"authenticated": true})
    } else {
        res.send({"authenticated": false})
    }
});