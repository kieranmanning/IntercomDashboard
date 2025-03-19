import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';



export default function NotificationsTimeline() {
    const [ notificationData, setNotificationData ] = useState(null);
    console.log(notificationData)

    function transform_data(data: Array<object>) {
        const transformed_data = data.map((item) => {
            return {
                x: item.timestamp,
                y: item.value
            }
        })
        return transformed_data
    }
    
    useEffect(() => {
        fetch('http://localhost:8080/api/notifications')
            .then(response => response.json())
            .then(function(data){
                console.log(data);
                setNotificationData(data);
            });
    }, []);

    if(notificationData === null){
        return (
            <LineChart
            loading
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                data: [],
                },
            ]}
            width={500}
            height={300}
        />    
        )
    }

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