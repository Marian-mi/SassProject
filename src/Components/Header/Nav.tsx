import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Children, useState } from 'react'
import DropDown from '../Common/DropDown'
import { dropdownData } from './HeaderData'

type Props = {
    data: {
        id: number;
        name: string;
    }[];
}
const Nav = ({ data }: Props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <ul className="navbar">
            {data.map((item) => {
                return (
                    <li key={item.id}>
                        {item.name}
                    </li>
                )
            })}
            <div className="navbar__button">
                <li onClick={() => {
                    setShowDropDown(!showDropDown);
                }}
                >DropDown <FontAwesomeIcon icon={showDropDown ? faArrowAltCircleUp : faArrowAltCircleDown} /> </li>
                {showDropDown && <DropDown content={dropdownData} className="navbar__dropdown" />}
            </div>
        </ul>
    )
}

export default Nav;
