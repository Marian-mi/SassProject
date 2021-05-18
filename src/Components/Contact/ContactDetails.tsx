import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    id: number;
    icon: IconDefinition;
    title: string;
    content: string;
}

const ContactDetails = ({ id, icon, title, content }: Props) => {
    return (
        <div key={id} className="contact__cards">
            <div className="contant__icon">
                <div>
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
            <div>
                <h3 className="contant__card-title">{title}</h3>
                <p className="contant__card-text">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default ContactDetails


