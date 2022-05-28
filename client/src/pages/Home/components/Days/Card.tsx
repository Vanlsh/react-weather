import React from 'react';
import s from './Days.module.scss'
import {Day} from "./Days";
import GlobalSvgSelector from '../../../../assets/icon/global/GlobalSvgSelector';

interface Props {
    day: Day;
}
const Card = ({day}: Props) => {
    const {thisDay, icon_id, day_info, info, temp_day, temp_night} = day
    return (
        <div className={s.card}>
            <div className={s.this__day}>{thisDay}</div>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={s.temp__day}>{temp_day}</div>
            <div className={s.temp__night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    );
};

export default Card;