import React from 'react';
import s from './Days.module.scss'

export interface ITab {
    value: string
}
const Tabs = () => {
    const tabs: ITab[] = [
        {value: "Week"},
        {value: "10 days"},
        {value: "Month"},
    ]
    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map(tab => (
                    <div className={s.tab} key={tab.value}>{tab.value}</div>
                ))}
            </div>
            <div className={s.cancel}>Cancel</div>
        </div>
    );
};

export default Tabs;