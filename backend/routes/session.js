import express from 'express';

const router = express.Router();

router.get('', (req, res) => {
    if(req.session.signed_in) {
        res.send({"authenticated": true, "user_email": req.session.user_email})
    } else {
        res.send({"authenticated": false})
    }
});

router.delete('', (req, res) => {
    if(req.session.signed_in) {
        console.log("deleting session for " + req.session.user_email);
        req.session.destroy();
    } else {
        console.log("Attempted to delete session for un authenticated user");
        res.sendStatus(401);
    }
})

export default router