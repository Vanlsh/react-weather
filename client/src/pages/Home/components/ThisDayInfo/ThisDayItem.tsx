import React from 'react';
import s from './ThisDayInfo.module.scss'
import IndicatorSvgSelector from "../../../../assets/icon/indicator/IndicatorSvgSelector";
import { Item } from './ThisDayInfo';

interface Props {
    item: Item
}

const ThisDayItem = ({item}:Props) => {
    const {icon_id,name,value} = item
    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id}/>
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    );
};

export default ThisDayItem;