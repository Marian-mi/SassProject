import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'

type Props = {
    icon: IconDefinition;
    title: string;
    content: string;
}

const Cards = ({ icon, title, content }: Props) => {
    return (
        <div className="intro-cards">
            <div className="intro-cards__icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="intro-cards__content">
                <h3  className="intro-cards__title">{title}</h3>
                <p  className="intro-cards__text">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Cards
