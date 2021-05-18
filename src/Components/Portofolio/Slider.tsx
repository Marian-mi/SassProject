import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Images from './PortofolioImages';

const Slider = () => {
    const [currentPic, setCurrentPic] = useState(0);
    
    const nextPic = () => {
        if (currentPic === 9) {
            setCurrentPic(0);
        }
        else {
            setCurrentPic(currentPic + 1);
        }
    }
    const prevPic = () => {
        if (currentPic === 0)
            setCurrentPic(8);
        else
            setCurrentPic(currentPic - 1);
    }
    return (
        <div className="slider">
            <button type="button" onClick={prevPic}><FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            <Images current={currentPic}/>
            <button type="button" onClick={nextPic}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
        </div>
    )
}

export default Slider
