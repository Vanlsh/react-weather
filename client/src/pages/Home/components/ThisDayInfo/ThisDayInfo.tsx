import React from 'react';
import s from './ThisDayInfo.module.scss'
import ThisDayItem from "./ThisDayItem";

export interface Item {
    icon_id: string
    name: string
    value: string
}

const ThisDayInfo = () => {
    const items: Item[] = [
        {icon_id: 'temp', name: 'Temperature', value: '20° feels like 17°'},
        {icon_id: 'pressure', name: 'Pressure', value: '765 mmHg - normal'},
        {icon_id: 'precipitation', name: 'Precipitation', value: '20° feels like 17°'},
        {icon_id: 'wind', name: 'Wind', value: '3 m/s southwest - light breeze'},
    ]
    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_item}>
                {items.map(item => (
                    <ThisDayItem key={item.icon_id} item={item}/>
                ))}
            </div>
            <img className={s.cloud__img} src='images/cloud.png' alt="cloud"/>
        </div>
    );
};

export default ThisDayInfo;