import React from 'react';
import Select, { StylesConfig } from 'react-select';
import GlobalSvgSelector from "../../assets/icon/global/GlobalSvgSelector";
import s from './Header.module.scss'

interface Props {

}
const Header = (props: Props) => {
    const options = [
        { value: 'kyiv', label: 'Kyiv' },
        { value: 'kharkiv', label: 'Kharkiv' },
        { value: 'cherkasy', label: 'Cherkasy' }
    ]

    const colourStyles: StylesConfig = {
        control: (styles) =>  ({
            ...styles,
            backgroundColor: '#4793FF33',
            borderRadius: '10px',
            width: '194px',
            height: '37px',
            border: 'none',
            fontSize: 16,
            color:'#000000',
            textAlign: 'center'
        })

    }
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}><GlobalSvgSelector id={'invert-color'}/></div>
                <Select defaultValue={options[0]} options={options} styles={colourStyles}/>
            </div>
        </header>
    );
};

export default Header;