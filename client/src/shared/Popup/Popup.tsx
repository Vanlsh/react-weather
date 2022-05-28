import React from 'react';
import s from './Popup.module.scss'
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import {Item} from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import GlobalSvgSelector from "../../assets/icon/global/GlobalSvgSelector";

interface Props { }

const items: Item[] = [
    {icon_id: 'temp', name: 'Temperature', value: '20° feels like 17°'},
    {icon_id: 'pressure', name: 'Pressure', value: '765 mmHg - normal'},
    {icon_id: 'precipitation', name: 'Precipitation', value: '20° feels like 17°'},
    {icon_id: 'wind', name: 'Wind', value: '3 m/s southwest - light breeze'},
]

const Popup = () => {
    return (
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>12°</div>
                    <div className={s.day__name}>Wednesday</div>
                    <div className={s.img}><GlobalSvgSelector id={"sun"}/></div>
                    <div className={s.day__time}>Time: <span>21:54</span></div>
                    <div className={s.day__city}>City: <span>Kyiv</span></div>
                </div>
                <div className={s.this__day_info_item}>
                    {items.map(item => (
                        <ThisDayItem key={item.icon_id} item={item}/>
                    ))}
                </div>
                <div className={s.close}><GlobalSvgSelector id={"close"}/></div>
            </div>
        </>
    );
};

export default Popup;