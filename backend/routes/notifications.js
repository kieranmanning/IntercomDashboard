import express from 'express';
import config from '../config.js';

const router = express.Router();

function mapNotificationData(dynamoData) {
    graphData = dynamoData.Items.map(item => {
        
    });
}

router.get('', (req, res) => {
    if(req.session.signed_in) {
        console.log("fetching notifications for " + req.session.user_email);
        const idToken = req.session.id_token;
        fetch(config.aws_notifications_api.base_invoke_url + "/notifications", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + idToken,
            }
        }).then(response => response.json())
        .then(data => {
            res.send(mapNotificationData(data));
        });
    }
});

export default router