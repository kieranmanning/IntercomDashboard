import express from 'express';

const router = express.Router();

router.get('', (req, res) => {
    if(req.session.signed_in) {
        idToken = req.session.id_token
        
});

export default router