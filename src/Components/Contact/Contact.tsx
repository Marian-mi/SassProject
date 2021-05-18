import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactCard from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="contact__title">Contact</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6824.691255571146!2d-0.11961123328904616!3d51.50228323390239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2s!4v1621346901523!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 'none' }}
                loading="lazy"
                className="company-location"
            >
            </iframe>
            <div className="contact__information">
                <div className="contact__cards-container">
                    {ContactData.map((item) => (
                        <ContactCard
                            content={item.content}
                            id={item.id}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </div>
                <div className="contact__send-message">
                    <ContactForm />
                    <button>Submit Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact

const ContactData = [
    {
        id: 0,
        icon: faLocationArrow,
        title: 'Address: ',
        content: '50 Trenton Street Rego Park, NY 11374',
    },
    {
        id: 1,
        icon: faMailBulk,
        title: 'Email: ',
        content: 'info@example.com',
    },
    {
        id: 2,
        icon: faPhone,
        title: 'Phone: ',
        content: '+1 941-973-5654'
    }
]