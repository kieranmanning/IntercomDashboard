import express from 'express';

const router = express.Router();

export default router.get('', (req, res) => {
    if(req.session.signed_in) {
        res.send({"authenticated": true, "user_email": req.session.user_email})
    } else {
        res.send({"authenticated": false})
    }
});