import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    icon: IconDefinition;
    title: string;
    text: string;
}

const IntroCards = ({ icon, title, text }: Props) => {
    return (
        <div className="intro-video__card">
            <div className="intro-video__card-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div>
                <h4 className="intro-video__card-title">{title}</h4>
                <p className="intro-video__card-text">{text}</p>
            </div>
        </div>
    )
}

export default IntroCards;
