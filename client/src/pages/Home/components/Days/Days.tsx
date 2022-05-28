import React from 'react';
import Card from './Card';
import s from './Days.module.scss'
import Tabs from './Tabs';

export interface Day {
    thisDay: string,
    day_info: string,
    icon_id: string ,
    temp_day: string ,
    temp_night: string,
    info: string
}
const Days = () => {
    const days: Day[] = [
        {
            thisDay: 'Today',
            day_info: '28',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+14',
            info: "Cloudy"
        },
        {
            thisDay: 'Tomorrow',
            day_info: '29',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+14',
            info: "Cloudy"
        },
        {
            thisDay: 'Wednesday',
            day_info: '29',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+14',
            info: "Cloudy"
        },
        {
            thisDay: 'Thursday',
            day_info: '29',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+14',
            info: "Cloudy"
        },
        {
            thisDay: 'Wednesday',
            day_info: '29',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+14',
            info: "Cloudy"
        }
    ]
        return (
            <>
                <Tabs/>
                <div className={s.days}>
                    {days.map((day: Day) => (<Card day={day}/>))}
                </div>
            </>
    );
};

export default Days;