
const ContactForm = () => {
    return (
        <div className="send-message">
            <div className="send-message__section1">
                <input type="text" placeholder="Your name..."/>
                <input type="email" placeholder="Your Email address..."/>
            </div>
            <div className="send-message__section2">
                <input type="text" placeholder="Subject..."/>
            </div>
            <textarea name="message-content" placeholder="Your message..." cols={30} rows={10}></textarea>
        </div>
    )
}

export default ContactForm
