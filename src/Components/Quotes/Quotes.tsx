import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mattImage from '../../assets/images/testimonials-4.jpg';

const Quotes = () => {
    return (
        <div className="quotes">
            <div className="quotes__image">
                <img src={mattImage} alt="matt-brandon" />
            </div>
            <h3 className="quotes__name">Matt Brandon</h3>
            <p className="quotes__profession">Freelancer</p>
            <p className="quotes__text">
                <FontAwesomeIcon icon={faQuoteLeft} />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
                <FontAwesomeIcon icon={faQuoteRight} />
            </p>
            <div className="quotes__buttons">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Quotes
