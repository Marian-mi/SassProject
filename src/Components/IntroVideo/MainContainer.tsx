import { useEffect } from 'react';
import aboutImage from '../../assets/images/about.jpg';
import ServiceContainer from './IntroCards';
import { data } from './Data';

const MainContainer = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((item) => {
            if (item.isIntersecting) {
                item.target.classList.add('intro-video__cards__visible')
            }else {
                item.target.classList.remove('intro-video__cards__visible')
            }
        })
    }, { threshold: 0.6})

    useEffect(() => {
        const cards = document.querySelectorAll<HTMLDivElement>('.intro-video__card');
        if (cards) {
            cards.forEach((element) => {
                observer.observe(element);
            })
        }
        return () => {
            observer.disconnect();
        }
    }, [])
    return (
        <div className="intro-video">
            <div className="intro-video__image">
                <img src={aboutImage} alt="about-image" />
            </div>
            <div className="intro-video__content">
                <h3 className="intro-video__title">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo
                </h3>
                <p className="intro-video__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes,
                </p>
                <section className="intro-video__cards-container">
                    {data.map((item) => (
                        <ServiceContainer
                            icon={item.icon}
                            text={item.text}
                            title={item.title}
                            key={item.id}
                        />
                    ))}
                </section>
            </div>

        </div>
    )
}

export default MainContainer;
