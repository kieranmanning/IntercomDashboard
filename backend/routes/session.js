import express from 'express';

const router = express.Router();

export default router.get('', (req, res) => {
    if(req.session.signed_in) {
        res.send({"authenticated": true, "user email": req.session.user_email})
    } else {
        res.send({"authenticated": false})
    }
});