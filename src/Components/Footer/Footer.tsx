import { faFacebook, faInstagram, faLinkedin, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    return (
        <div className="footer">
            <div className="company-info">
                <h3>
                    Butterfly
                </h3>
                <p>
                    50 Trenton Street Rego Park,<br />
                    New York, NY 11374<br />
                    United States<br />
                </p>
                <p>
                    <strong>Phone: </strong> +1 941-973-5654<br />
                    <strong>Email: </strong> infor@example.com<br />
                </p>
            </div>
            <div className="useful-links">
                <h3>Useful Links</h3>
                {usefullLink.map((item) => (
                    <a href="#" key={item.id}>
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="services-links">
                <h3>Our Services:</h3>
                {ourSerices.map((item) => (
                    <a href="#" key={item.id}>
                        {item.name}
                    </a>
                ))}
            </div>
            <div className="socials">
                <h3 className="socials__title">Our Social Networks:</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                </p>
                <div className="socials__icon">
                    {scoialIcons.map((item, index) => (
                        <div key={index}>
                            <FontAwesomeIcon icon={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer


const usefullLink = [
    {
        id: 0,
        name: 'Home',
    },
    {
        id: 1,
        name: 'About Us',
    },
    {
        id: 2,
        name: 'Services',
    },
    {
        id: 3,
        name: 'Terms of service',
    },
    {
        id: 4,
        name: 'Privacy policy',
    },
]

const ourSerices = [
    {
        id: 0,
        name: 'Web Design',
    },
    {
        id: 1,
        name: 'Web Development',
    },
    {
        id: 2,
        name: 'Product Management',
    },
    {
        id: 3,
        name: 'Marketing',
    },
    {
        id: 4,
        name: 'Graphic Design',
    },
]

const scoialIcons = [
    faFacebook,
    faTwitter,
    faInstagram,
    faSkype,
    faLinkedin,
]