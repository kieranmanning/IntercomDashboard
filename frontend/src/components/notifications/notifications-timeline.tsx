import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function NotificationsTimeline() {
    const [ notificationData, setNotificationData ] = useState(null);
    console.log(notificationData)

    // function transform_data(data) {
    //     const transformed_data = data.map((item) => {
    //         return {
    //             x: item.timestamp,
    //             y: item.value
    //         }
    //     })
    //     return transformed_data
    // }
    
    useEffect(() => {
        fetch('http://localhost:8080/api/notifications')
            .then(response => response.json())
            .then(data => setNotificationData(data));
    }, []);

    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                data: [1, 2, 3, 5, 8, 10],
                },
            ]}
            width={500}
            height={300}
        />    
    );
}